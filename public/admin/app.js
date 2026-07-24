document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // DATA STORE (localStorage)
    // ==========================================
    const STORAGE_KEYS = {
        projects: 'dl_projects',
        clients: 'dl_clients',
        portfolio: 'dl_portfolio',
        works: 'dl_works',
        settings: 'dl_settings'
    };

    function loadData(key) {
        try {
            return JSON.parse(localStorage.getItem(key)) || [];
        } catch { return []; }
    }

    function saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    function loadSettings() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.settings)) || {};
        } catch { return {}; }
    }

    function genId() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    }

    // ==========================================
    // STATE
    // ==========================================
    let projects = loadData(STORAGE_KEYS.projects);
    let clients = loadData(STORAGE_KEYS.clients);
    let portfolio = loadData(STORAGE_KEYS.portfolio);
    let works = loadData(STORAGE_KEYS.works);
    let settings = loadSettings();

    // ==========================================
    // DOM REFS
    // ==========================================
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarClose = document.getElementById('sidebarClose');
    const menuToggle = document.getElementById('menuToggle');
    const pageTitle = document.getElementById('pageTitle');
    const modalOverlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const toastContainer = document.getElementById('toastContainer');
    const globalSearch = document.getElementById('globalSearch');
    const quickAddBtn = document.getElementById('quickAddBtn');

    // ==========================================
    // CUSTOM CONFIRMATION MODAL
    // ==========================================
    const confirmOverlay = document.getElementById('confirmOverlay');
    const confirmTitle = document.getElementById('confirmTitle');
    const confirmMessage = document.getElementById('confirmMessage');
    const confirmOkBtn = document.getElementById('confirmOkBtn');
    const confirmCancelBtn = document.getElementById('confirmCancelBtn');
    const confirmClose = document.getElementById('confirmClose');
    
    let confirmResolve = null;
    
    function customConfirm(message, title = 'Confirm Action') {
        return new Promise((resolve) => {
            confirmTitle.textContent = title;
            confirmMessage.textContent = message;
            confirmOverlay.classList.add('active');
            confirmResolve = resolve;
        });
    }
    
    function closeConfirm(value) {
        confirmOverlay.classList.remove('active');
        if (confirmResolve) {
            confirmResolve(value);
            confirmResolve = null;
        }
    }
    
    confirmOkBtn.addEventListener('click', () => closeConfirm(true));
    confirmCancelBtn.addEventListener('click', () => closeConfirm(false));
    confirmClose.addEventListener('click', () => closeConfirm(false));
    confirmOverlay.addEventListener('click', (e) => {
        if (e.target === confirmOverlay) closeConfirm(false);
    });

    // ==========================================
    // SIDEBAR / MOBILE
    // ==========================================
    function openSidebar() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    }

    menuToggle.addEventListener('click', openSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // ==========================================
    // WORKS VIEW TOGGLE / SWITCHER
    // ==========================================
    let currentWorkView = 'list'; // 'list' | 'kanban'
    const workViewListBtn = document.getElementById('workViewListBtn');
    const workViewKanbanBtn = document.getElementById('workViewKanbanBtn');
    const worksListWrapper = document.getElementById('worksListWrapper');
    const worksKanbanWrapper = document.getElementById('worksKanbanWrapper');

    if (workViewListBtn && workViewKanbanBtn) {
        workViewListBtn.addEventListener('click', () => {
            currentWorkView = 'list';
            workViewListBtn.classList.add('active');
            workViewListBtn.style.background = 'rgba(147, 51, 234, 0.15)';
            workViewListBtn.style.color = 'hsl(var(--color-core))';
            workViewKanbanBtn.classList.remove('active');
            workViewKanbanBtn.style.background = 'none';
            workViewKanbanBtn.style.color = 'var(--text-secondary)';
            
            worksListWrapper.style.display = 'block';
            worksKanbanWrapper.style.display = 'none';
            renderWorks();
        });

        workViewKanbanBtn.addEventListener('click', () => {
            currentWorkView = 'kanban';
            workViewKanbanBtn.classList.add('active');
            workViewKanbanBtn.style.background = 'rgba(147, 51, 234, 0.15)';
            workViewKanbanBtn.style.color = 'hsl(var(--color-core))';
            workViewListBtn.classList.remove('active');
            workViewListBtn.style.background = 'none';
            workViewListBtn.style.color = 'var(--text-secondary)';
            
            worksListWrapper.style.display = 'none';
            worksKanbanWrapper.style.display = 'block';
            renderWorks();
        });
    }

    // Initialize Kanban drag-and-drop targets
    setTimeout(() => {
        const columns = document.querySelectorAll('.kanban-cards');
        columns.forEach(col => {
            col.addEventListener('dragover', (e) => {
                e.preventDefault();
                col.classList.add('drag-over');
            });
            
            col.addEventListener('dragleave', (e) => {
                col.classList.remove('drag-over');
            });
            
            col.addEventListener('drop', (e) => {
                e.preventDefault();
                col.classList.remove('drag-over');
                const workId = e.dataTransfer.getData('text/plain');
                const targetStatus = col.id.replace('kanban-', '');
                
                const w = works.find(x => x.id === workId);
                if (w && w.status !== targetStatus) {
                    w.status = targetStatus;
                    saveData(STORAGE_KEYS.works, works);
                    renderWorks();
                    showToast(`Moved task to ${formatStatus(targetStatus)}`);
                }
            });
        });
    }, 100);

    // ==========================================
    // NAVIGATION
    // ==========================================
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    function switchPage(pageName) {
        navLinks.forEach(l => l.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));

        const link = document.querySelector(`.nav-link[data-page="${pageName}"]`);
        const page = document.getElementById(`page-${pageName}`);
        if (link) link.classList.add('active');
        if (page) page.classList.add('active');

        pageTitle.textContent = link ? link.querySelector('.nav-label').textContent : pageName;
        closeSidebar();
        refreshCurrentPage(pageName);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage(link.dataset.page);
        });
    });

    document.querySelectorAll('.panel-link[data-goto]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage(link.dataset.goto);
        });
    });

    function refreshCurrentPage(pageName) {
        switch (pageName) {
            case 'dashboard': renderDashboard(); break;
            case 'projects': renderProjects(); break;
            case 'clients': renderClients(); break;
            case 'portfolio': renderPortfolio(); break;
            case 'works': renderWorks(); break;
            case 'settings': renderSettings(); break;
        }
    }

    // ==========================================
    // TOAST
    // ==========================================
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(20px)';
            toast.style.transition = '0.3s';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ==========================================
    // MODAL
    // ==========================================
    function openModal(title, bodyHTML) {
        modalTitle.textContent = title;
        modalBody.innerHTML = bodyHTML;
        modalOverlay.classList.add('active');
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // ==========================================
    // QUICK ADD
    // ==========================================
    quickAddBtn.addEventListener('click', () => {
        const currentPage = document.querySelector('.nav-link.active')?.dataset.page || 'dashboard';
        switch (currentPage) {
            case 'projects': document.getElementById('addProjectBtn').click(); break;
            case 'clients': document.getElementById('addClientBtn').click(); break;
            case 'portfolio': document.getElementById('addPortfolioBtn').click(); break;
            case 'works': document.getElementById('addWorkBtn').click(); break;
            default: document.getElementById('addProjectBtn').click(); break;
        }
    });

    // ==========================================
    // DASHBOARD
    // ==========================================
    function renderDashboard() {
        document.getElementById('stat-total-projects').textContent = projects.length;
        document.getElementById('stat-ongoing').textContent = projects.filter(p => p.status === 'ongoing').length;
        document.getElementById('stat-delivered').textContent = projects.filter(p => p.status === 'delivered').length;
        document.getElementById('stat-clients').textContent = clients.length;

        // Pipeline Value
        let pipelineTotal = 0;
        projects.forEach(p => {
            if (p.status === 'ongoing' || p.status === 'planning') {
                if (p.value) {
                    const num = parseFloat(p.value.replace(/[^0-9.]/g, ''));
                    if (!isNaN(num)) pipelineTotal += num;
                }
            }
        });
        document.getElementById('stat-pipeline-value').textContent = 'LKR ' + pipelineTotal.toLocaleString('en-US');

        // Recent Projects
        const recentProjEl = document.getElementById('recent-projects');
        if (projects.length === 0) {
            recentProjEl.innerHTML = '<div class="empty-state">No projects yet. Add your first project!</div>';
        } else {
            recentProjEl.innerHTML = projects.slice(-5).reverse().map(p => `
                <div class="recent-item">
                    <div>
                        <div class="recent-item-name">${esc(p.name)}</div>
                        <div class="recent-item-sub">${esc(p.client || 'No client')} · ${formatDate(p.deadline)}</div>
                    </div>
                    <span class="status-badge status-${p.status}">${formatStatus(p.status)}</span>
                </div>
            `).join('');
        }

        // Recent Clients
        const recentClientEl = document.getElementById('recent-clients');
        if (clients.length === 0) {
            recentClientEl.innerHTML = '<div class="empty-state">No clients yet. Add your first client!</div>';
        } else {
            recentClientEl.innerHTML = clients.slice(-5).reverse().map(c => `
                <div class="recent-item">
                    <div>
                        <div class="recent-item-name">${esc(c.name)}</div>
                        <div class="recent-item-sub">${esc(c.email || '')} ${c.company ? '· ' + esc(c.company) : ''}</div>
                    </div>
                </div>
            `).join('');
        }

        // Status Bars
        const total = projects.length || 1;
        const counts = {
            ongoing: projects.filter(p => p.status === 'ongoing').length,
            planning: projects.filter(p => p.status === 'planning').length,
            onhold: projects.filter(p => p.status === 'on-hold').length,
            delivered: projects.filter(p => p.status === 'delivered').length,
            cancelled: projects.filter(p => p.status === 'cancelled').length
        };

        document.getElementById('bar-ongoing').style.width = (counts.ongoing / total * 100) + '%';
        document.getElementById('bar-planning').style.width = (counts.planning / total * 100) + '%';
        document.getElementById('bar-onhold').style.width = (counts.onhold / total * 100) + '%';
        document.getElementById('bar-delivered').style.width = (counts.delivered / total * 100) + '%';
        document.getElementById('bar-cancelled').style.width = (counts.cancelled / total * 100) + '%';

        document.getElementById('count-ongoing').textContent = counts.ongoing;
        document.getElementById('count-planning').textContent = counts.planning;
        document.getElementById('count-onhold').textContent = counts.onhold;
        document.getElementById('count-delivered').textContent = counts.delivered;
        document.getElementById('count-cancelled').textContent = counts.cancelled;
    }

    // ==========================================
    // PROJECTS
    // ==========================================
    function renderProjects() {
        const tbody = document.getElementById('projectsTableBody');
        let filtered = [...projects];

        // Filters
        const statusFilter = document.getElementById('filterProjectStatus').value;
        const typeFilter = document.getElementById('filterProjectType').value;
        const searchFilter = document.getElementById('filterProjectSearch').value.toLowerCase();

        if (statusFilter !== 'all') filtered = filtered.filter(p => p.status === statusFilter);
        if (typeFilter !== 'all') filtered = filtered.filter(p => p.type === typeFilter);
        if (searchFilter) filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchFilter) ||
            (p.client || '').toLowerCase().includes(searchFilter)
        );

        if (filtered.length === 0) {
            tbody.innerHTML = '<tr class="empty-row"><td colspan="8"><div class="empty-state">No projects found.</div></td></tr>';
        } else {
            tbody.innerHTML = filtered.map(p => {
                const projWorks = works.filter(w => w.projectId === p.id);
                let progressPercent = 0;
                if (projWorks.length > 0) {
                    const completed = projWorks.filter(w => w.status === 'completed').length;
                    progressPercent = Math.round((completed / projWorks.length) * 100);
                } else {
                    switch (p.status) {
                        case 'planning': progressPercent = 10; break;
                        case 'ongoing': progressPercent = 40; break;
                        case 'on-hold': progressPercent = 20; break;
                        case 'delivered': progressPercent = 100; break;
                        case 'cancelled': progressPercent = 0; break;
                        default: progressPercent = 0;
                    }
                }
                return `
                    <tr>
                        <td><strong>${esc(p.name)}</strong></td>
                        <td>${esc(p.client || '—')}</td>
                        <td>${esc(p.type || '—')}</td>
                        <td>
                            <div class="project-progress-wrapper">
                                <div class="project-progress-track">
                                    <div class="project-progress-bar" style="width: ${progressPercent}%"></div>
                                </div>
                                <span class="project-progress-text">${progressPercent}%</span>
                            </div>
                        </td>
                        <td><span class="status-badge status-${p.status}">${formatStatus(p.status)}</span></td>
                        <td>${formatDate(p.deadline)}</td>
                        <td>${p.value ? esc(p.value) : '—'}</td>
                        <td class="table-actions">
                            <button class="btn-icon" onclick="publishToPortfolio('${p.id}')" title="Publish to Portfolio">🚀</button>
                            <button class="btn-icon" onclick="editProject('${p.id}')" title="Edit">✏️</button>
                            <button class="btn-icon" onclick="deleteProject('${p.id}')" title="Delete">🗑️</button>
                        </td>
                    </tr>
                `;
            }).join('');
        }
    }

    function projectFormHTML(data = {}) {
        return `
            <div class="form-group">
                <label>Project Name *</label>
                <input type="text" class="form-input" id="formProjectName" value="${esc(data.name || '')}" required placeholder="e.g. CeyOS Business Dashboard">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Client</label>
                    <select class="form-select" id="formProjectClient">
                        <option value="">No client</option>
                        ${clients.map(c => `<option value="${esc(c.name)}" ${data.client === c.name ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Type</label>
                    <select class="form-select" id="formProjectType">
                        ${['web','mobile','desktop','saas','api','other'].map(t =>
                            `<option value="${t}" ${data.type === t ? 'selected' : ''}>${t.charAt(0).toUpperCase() + t.slice(1)}${t === 'api' ? ' / Backend' : t === 'web' ? ' App' : t === 'mobile' ? ' App' : t === 'desktop' ? ' App' : ''}</option>`
                        ).join('')}
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Status</label>
                    <select class="form-select" id="formProjectStatus">
                        ${['planning','ongoing','on-hold','delivered','cancelled'].map(s =>
                            `<option value="${s}" ${data.status === s ? 'selected' : ''}>${formatStatus(s)}</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Deadline</label>
                    <input type="date" class="form-input" id="formProjectDeadline" value="${data.deadline || ''}">
                </div>
            </div>
            <div class="form-group">
                <label>Value</label>
                <input type="text" class="form-input" id="formProjectValue" value="${esc(data.value || '')}" placeholder="e.g. LKR 500,000">
            </div>
            <div class="form-group">
                <label>Description / Notes</label>
                <textarea class="form-textarea" id="formProjectNotes" placeholder="Project details, requirements, notes...">${esc(data.notes || '')}</textarea>
            </div>
            <div class="modal-actions">
                <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
                <button class="btn btn-primary" id="formProjectSave">Save Project</button>
            </div>
        `;
    }

    document.getElementById('addProjectBtn').addEventListener('click', () => {
        openModal('Add Project', projectFormHTML());
        document.getElementById('formProjectSave').addEventListener('click', () => {
            const name = document.getElementById('formProjectName').value.trim();
            if (!name) return showToast('Project name is required', 'error');
            projects.push({
                id: genId(),
                name,
                client: document.getElementById('formProjectClient').value,
                type: document.getElementById('formProjectType').value,
                status: document.getElementById('formProjectStatus').value,
                deadline: document.getElementById('formProjectDeadline').value,
                value: document.getElementById('formProjectValue').value.trim(),
                notes: document.getElementById('formProjectNotes').value.trim(),
                createdAt: new Date().toISOString()
            });
            saveData(STORAGE_KEYS.projects, projects);
            closeModal();
            renderProjects();
            showToast('Project added!');
        });
    });

    window.editProject = function(id) {
        const p = projects.find(x => x.id === id);
        if (!p) return;
        openModal('Edit Project', projectFormHTML(p));
        document.getElementById('formProjectSave').addEventListener('click', () => {
            const name = document.getElementById('formProjectName').value.trim();
            if (!name) return showToast('Project name is required', 'error');
            p.name = name;
            p.client = document.getElementById('formProjectClient').value;
            p.type = document.getElementById('formProjectType').value;
            p.status = document.getElementById('formProjectStatus').value;
            p.deadline = document.getElementById('formProjectDeadline').value;
            p.value = document.getElementById('formProjectValue').value.trim();
            p.notes = document.getElementById('formProjectNotes').value.trim();
            saveData(STORAGE_KEYS.projects, projects);
            closeModal();
            renderProjects();
            showToast('Project updated!');
        });
    };

    window.publishToPortfolio = function(id) {
        const p = projects.find(x => x.id === id);
        if (!p) return;
        switchPage('portfolio');
        setTimeout(() => {
            document.getElementById('addPortfolioBtn').click();
            setTimeout(() => {
                const titleInput = document.getElementById('formPortfolioTitle');
                if (titleInput) titleInput.value = p.name || '';
                
                const catSelect = document.getElementById('formPortfolioCategory');
                if (catSelect) {
                    let cat = 'other';
                    if (['web', 'mobile', 'design', 'branding', 'other'].includes(p.type)) {
                        cat = p.type;
                    } else if (p.type === 'desktop' || p.type === 'saas' || p.type === 'api') {
                        cat = 'web';
                    }
                    catSelect.value = cat;
                }
                
                const descInput = document.getElementById('formPortfolioDesc');
                if (descInput) descInput.value = p.notes || '';
                
                showToast('Pre-filled project details for showcase!');
            }, 50);
        }, 50);
    };

    window.deleteProject = async function(id) {
        if (!await customConfirm('Are you sure you want to delete this project? This will also remove related works.')) return;
        projects = projects.filter(p => p.id !== id);
        // Also remove related works
        works = works.filter(w => w.projectId !== id);
        saveData(STORAGE_KEYS.projects, projects);
        saveData(STORAGE_KEYS.works, works);
        renderProjects();
        showToast('Project deleted', 'info');
    };

    document.getElementById('filterProjectStatus').addEventListener('change', renderProjects);
    document.getElementById('filterProjectType').addEventListener('change', renderProjects);
    document.getElementById('filterProjectSearch').addEventListener('input', renderProjects);

    // ==========================================
    // CLIENTS
    // ==========================================
    function renderClients() {
        const grid = document.getElementById('clientsGrid');
        let filtered = [...clients];
        const search = document.getElementById('filterClientSearch').value.toLowerCase();
        if (search) filtered = filtered.filter(c =>
            c.name.toLowerCase().includes(search) ||
            (c.company || '').toLowerCase().includes(search) ||
            (c.email || '').toLowerCase().includes(search)
        );

        if (filtered.length === 0) {
            grid.innerHTML = '<div class="empty-state-full">No clients found.</div>';
        } else {
            grid.innerHTML = filtered.map(c => `
                <div class="client-card glass-card">
                    <div class="client-card-header">
                        <div style="display:flex; gap:0.75rem; align-items:center;">
                            <div class="client-avatar">${getInitials(c.name)}</div>
                            <div>
                                <div class="client-name">${esc(c.name)}</div>
                                <div class="client-company">${esc(c.company || '')}</div>
                            </div>
                        </div>
                        <div class="client-actions">
                            <button class="btn-icon" onclick="editClient('${c.id}')" title="Edit">✏️</button>
                            <button class="btn-icon" onclick="deleteClient('${c.id}')" title="Delete">🗑️</button>
                        </div>
                    </div>
                    <div class="client-details">
                        ${c.email ? `<div class="client-detail">📧 ${esc(c.email)}</div>` : ''}
                        ${c.phone ? `<div class="client-detail">📱 ${esc(c.phone)}</div>` : ''}
                        ${c.notes ? `<div class="client-detail">📝 ${esc(c.notes)}</div>` : ''}
                    </div>
                </div>
            `).join('');
        }
    }

    function clientFormHTML(data = {}) {
        return `
            <div class="form-group">
                <label>Client Name *</label>
                <input type="text" class="form-input" id="formClientName" value="${esc(data.name || '')}" required placeholder="e.g. John Smith">
            </div>
            <div class="form-group">
                <label>Company</label>
                <input type="text" class="form-input" id="formClientCompany" value="${esc(data.company || '')}" placeholder="e.g. Acme Corp">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-input" id="formClientEmail" value="${esc(data.email || '')}" placeholder="client@email.com">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-input" id="formClientPhone" value="${esc(data.phone || '')}" placeholder="+94 7X XXX XXXX">
                </div>
            </div>
            <div class="form-group">
                <label>Notes</label>
                <textarea class="form-textarea" id="formClientNotes" placeholder="Additional info about this client...">${esc(data.notes || '')}</textarea>
            </div>
            <div class="modal-actions">
                <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
                <button class="btn btn-primary" id="formClientSave">Save Client</button>
            </div>
        `;
    }

    document.getElementById('addClientBtn').addEventListener('click', () => {
        openModal('Add Client', clientFormHTML());
        document.getElementById('formClientSave').addEventListener('click', () => {
            const name = document.getElementById('formClientName').value.trim();
            if (!name) return showToast('Client name is required', 'error');
            clients.push({
                id: genId(),
                name,
                company: document.getElementById('formClientCompany').value.trim(),
                email: document.getElementById('formClientEmail').value.trim(),
                phone: document.getElementById('formClientPhone').value.trim(),
                notes: document.getElementById('formClientNotes').value.trim(),
                createdAt: new Date().toISOString()
            });
            saveData(STORAGE_KEYS.clients, clients);
            closeModal();
            renderClients();
            showToast('Client added!');
        });
    });

    window.editClient = function(id) {
        const c = clients.find(x => x.id === id);
        if (!c) return;
        openModal('Edit Client', clientFormHTML(c));
        document.getElementById('formClientSave').addEventListener('click', () => {
            const name = document.getElementById('formClientName').value.trim();
            if (!name) return showToast('Client name is required', 'error');
            c.name = name;
            c.company = document.getElementById('formClientCompany').value.trim();
            c.email = document.getElementById('formClientEmail').value.trim();
            c.phone = document.getElementById('formClientPhone').value.trim();
            c.notes = document.getElementById('formClientNotes').value.trim();
            saveData(STORAGE_KEYS.clients, clients);
            closeModal();
            renderClients();
            showToast('Client updated!');
        });
    };

    window.deleteClient = async function(id) {
        if (!await customConfirm('Are you sure you want to delete this client?')) return;
        clients = clients.filter(c => c.id !== id);
        saveData(STORAGE_KEYS.clients, clients);
        renderClients();
        showToast('Client deleted', 'info');
    };

    document.getElementById('filterClientSearch').addEventListener('input', renderClients);

    // ==========================================
    // PORTFOLIO
    // ==========================================
    function renderPortfolio() {
        const grid = document.getElementById('portfolioGrid');
        let filtered = [...portfolio];
        const catFilter = document.getElementById('filterPortfolioCategory').value;
        const searchFilter = document.getElementById('filterPortfolioSearch').value.toLowerCase();

        if (catFilter !== 'all') filtered = filtered.filter(p => p.category === catFilter);
        if (searchFilter) filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(searchFilter) ||
            (p.description || '').toLowerCase().includes(searchFilter)
        );

        if (filtered.length === 0) {
            grid.innerHTML = '<div class="empty-state-full">No portfolio items found.</div>';
        } else {
            grid.innerHTML = filtered.map(p => `
                <div class="portfolio-card glass-card">
                    <div class="portfolio-card-banner" style="background: linear-gradient(135deg, ${p.bannerColor || 'rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%'});">
                        ${p.icon || '💼'}
                        <div class="portfolio-card-actions">
                            <button class="btn-icon" onclick="editPortfolio('${p.id}')" title="Edit">✏️</button>
                            <button class="btn-icon" onclick="deletePortfolio('${p.id}')" title="Delete">🗑️</button>
                        </div>
                    </div>
                    <div class="portfolio-card-body">
                        <div class="portfolio-card-title">${esc(p.title)}</div>
                        <div class="portfolio-card-desc">${esc(p.description || '')}</div>
                        <div class="portfolio-card-meta">
                            <span class="portfolio-tag">${esc(p.category || 'Other')}</span>
                            ${p.tags ? p.tags.split(',').map(t => `<span class="portfolio-tag">${esc(t.trim())}</span>`).join('') : ''}
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    const gradientPresets = [
        { name: 'Cyberpunk Purple', value: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)' },
        { name: 'Sunset Glow', value: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)' },
        { name: 'Emerald Forest', value: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(4, 120, 87, 0.2) 100%)' },
        { name: 'Deep Ocean', value: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(29, 78, 216, 0.2) 100%)' }
    ];

    window.selectSwatch = function(el) {
        document.querySelectorAll('.gradient-swatch').forEach(s => s.classList.remove('active'));
        el.classList.add('active');
        document.getElementById('formPortfolioBannerColor').value = el.dataset.value;
    };

    function portfolioFormHTML(data = {}) {
        const currentBanner = data.bannerColor || gradientPresets[0].value;
        return `
            <div class="form-group">
                <label>Title *</label>
                <input type="text" class="form-input" id="formPortfolioTitle" value="${esc(data.title || '')}" required placeholder="e.g. CeyOS Dashboard Redesign">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Category</label>
                    <select class="form-select" id="formPortfolioCategory">
                        ${['web','mobile','design','branding','other'].map(c =>
                            `<option value="${c}" ${data.category === c ? 'selected' : ''}>${c.charAt(0).toUpperCase() + c.slice(1)}</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Icon (emoji)</label>
                    <input type="text" class="form-input" id="formPortfolioIcon" value="${esc(data.icon || '💼')}" placeholder="💼">
                </div>
            </div>
            <div class="form-group">
                <label>Banner Gradient Preset</label>
                <div class="gradient-swatches">
                    ${gradientPresets.map(g => `
                        <div class="gradient-swatch ${currentBanner === g.value ? 'active' : ''}" 
                             style="background: ${g.value}" 
                             data-value="${g.value}" 
                             title="${g.name}"
                             onclick="selectSwatch(this)">
                        </div>
                    `).join('')}
                </div>
                <input type="hidden" id="formPortfolioBannerColor" value="${currentBanner}">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="form-textarea" id="formPortfolioDesc" placeholder="Brief description of this portfolio item...">${esc(data.description || '')}</textarea>
            </div>
            <div class="form-group">
                <label>Tags (comma separated)</label>
                <input type="text" class="form-input" id="formPortfolioTags" value="${esc(data.tags || '')}" placeholder="react, nextjs, ui-design">
            </div>
            <div class="form-group">
                <label>Live URL</label>
                <input type="url" class="form-input" id="formPortfolioUrl" value="${esc(data.url || '')}" placeholder="https://...">
            </div>
            <div class="form-group">
                <label>GitHub URL</label>
                <input type="url" class="form-input" id="formPortfolioGithub" value="${esc(data.github || '')}" placeholder="https://github.com/...">
            </div>
            <div class="modal-actions">
                <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
                <button class="btn btn-primary" id="formPortfolioSave">Save Item</button>
            </div>
        `;
    }

    document.getElementById('addPortfolioBtn').addEventListener('click', () => {
        openModal('Add Portfolio Item', portfolioFormHTML());
        document.getElementById('formPortfolioSave').addEventListener('click', () => {
            const title = document.getElementById('formPortfolioTitle').value.trim();
            if (!title) return showToast('Title is required', 'error');
            portfolio.push({
                id: genId(),
                title,
                category: document.getElementById('formPortfolioCategory').value,
                icon: document.getElementById('formPortfolioIcon').value.trim() || '💼',
                bannerColor: document.getElementById('formPortfolioBannerColor').value,
                description: document.getElementById('formPortfolioDesc').value.trim(),
                tags: document.getElementById('formPortfolioTags').value.trim(),
                url: document.getElementById('formPortfolioUrl').value.trim(),
                github: document.getElementById('formPortfolioGithub').value.trim(),
                createdAt: new Date().toISOString()
            });
            saveData(STORAGE_KEYS.portfolio, portfolio);
            closeModal();
            renderPortfolio();
            showToast('Portfolio item added!');
        });
    });

    window.editPortfolio = function(id) {
        const p = portfolio.find(x => x.id === id);
        if (!p) return;
        openModal('Edit Portfolio Item', portfolioFormHTML(p));
        document.getElementById('formPortfolioSave').addEventListener('click', () => {
            const title = document.getElementById('formPortfolioTitle').value.trim();
            if (!title) return showToast('Title is required', 'error');
            p.title = title;
            p.category = document.getElementById('formPortfolioCategory').value;
            p.icon = document.getElementById('formPortfolioIcon').value.trim() || '💼';
            p.bannerColor = document.getElementById('formPortfolioBannerColor').value;
            p.description = document.getElementById('formPortfolioDesc').value.trim();
            p.tags = document.getElementById('formPortfolioTags').value.trim();
            p.url = document.getElementById('formPortfolioUrl').value.trim();
            p.github = document.getElementById('formPortfolioGithub').value.trim();
            saveData(STORAGE_KEYS.portfolio, portfolio);
            closeModal();
            renderPortfolio();
            showToast('Portfolio item updated!');
        });
    };

    window.deletePortfolio = async function(id) {
        if (!await customConfirm('Are you sure you want to delete this portfolio item?')) return;
        portfolio = portfolio.filter(p => p.id !== id);
        saveData(STORAGE_KEYS.portfolio, portfolio);
        renderPortfolio();
        showToast('Portfolio item deleted', 'info');
    };

    document.getElementById('filterPortfolioCategory').addEventListener('change', renderPortfolio);
    document.getElementById('filterPortfolioSearch').addEventListener('input', renderPortfolio);

    // ==========================================
    // WORKS
    // ==========================================
    function renderWorkProjectFilter() {
        const select = document.getElementById('filterWorkProject');
        const current = select.value;
        select.innerHTML = '<option value="all">All Projects</option>' +
            projects.map(p => `<option value="${p.id}" ${current === p.id ? 'selected' : ''}>${esc(p.name)}</option>`).join('');
    }

    function renderWorks() {
        renderWorkProjectFilter();
        const tbody = document.getElementById('worksTableBody');
        let filtered = [...works];

        const statusFilter = document.getElementById('filterWorkStatus').value;
        const projectFilter = document.getElementById('filterWorkProject').value;
        const searchFilter = document.getElementById('filterWorkSearch').value.toLowerCase();

        if (statusFilter !== 'all') filtered = filtered.filter(w => w.status === statusFilter);
        if (projectFilter !== 'all') filtered = filtered.filter(w => w.projectId === projectFilter);
        if (searchFilter) filtered = filtered.filter(w =>
            w.title.toLowerCase().includes(searchFilter)
        );

        if (currentWorkView === 'kanban') {
            renderKanban(filtered);
            return;
        }

        if (filtered.length === 0) {
            tbody.innerHTML = '<tr class="empty-row"><td colspan="6"><div class="empty-state">No work items found.</div></td></tr>';
        } else {
            tbody.innerHTML = filtered.map(w => {
                const proj = projects.find(p => p.id === w.projectId);
                return `
                    <tr>
                        <td><strong>${esc(w.title)}</strong></td>
                        <td>${proj ? esc(proj.name) : '<span style="color:var(--text-muted)">Unlinked</span>'}</td>
                        <td><span class="status-badge status-${w.status}">${formatStatus(w.status)}</span></td>
                        <td><span class="priority-badge priority-${w.priority}">${(w.priority || 'medium').charAt(0).toUpperCase() + (w.priority || 'medium').slice(1)}</span></td>
                        <td>${formatDate(w.dueDate)}</td>
                        <td class="table-actions">
                            <button class="btn-icon" onclick="editWork('${w.id}')" title="Edit">✏️</button>
                            <button class="btn-icon" onclick="deleteWork('${w.id}')" title="Delete">🗑️</button>
                        </td>
                    </tr>
                `;
            }).join('');
        }
    }

    function renderKanban(filteredWorks) {
        const statuses = ['pending', 'in-progress', 'review', 'completed'];
        
        // Reset columns
        statuses.forEach(s => {
            const container = document.getElementById(`kanban-${s}`);
            if (container) container.innerHTML = '';
            const countEl = document.getElementById(`count-kanban-${s === 'in-progress' ? 'in-progress' : s}`);
            if (countEl) countEl.textContent = '0';
        });
        
        const counts = { pending: 0, 'in-progress': 0, review: 0, completed: 0 };
        
        filteredWorks.forEach(w => {
            const proj = projects.find(p => p.id === w.projectId);
            const projName = proj ? proj.name : 'Unlinked';
            const priorityLabel = w.priority || 'medium';
            const card = document.createElement('div');
            card.className = 'kanban-card';
            card.draggable = true;
            card.dataset.id = w.id;
            card.innerHTML = `
                <div class="kanban-card-title">${esc(w.title)}</div>
                <div class="kanban-card-project">📁 ${esc(projName)}</div>
                <div class="kanban-card-footer">
                    <span class="kanban-card-priority priority-${priorityLabel}">${priorityLabel}</span>
                    <span class="kanban-card-date">${formatDate(w.dueDate)}</span>
                </div>
            `;
            
            // Double click card to edit
            card.addEventListener('dblclick', () => {
                editWork(w.id);
            });
            
            // Drag and drop event listeners
            card.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', w.id);
                card.style.opacity = '0.4';
            });
            
            card.addEventListener('dragend', () => {
                card.style.opacity = '1';
            });
            
            const statusKey = w.status || 'pending';
            const container = document.getElementById(`kanban-${statusKey}`);
            if (container) {
                container.appendChild(card);
                counts[statusKey]++;
            }
        });
        
        // Update column counts
        statuses.forEach(s => {
            const countEl = document.getElementById(`count-kanban-${s === 'in-progress' ? 'in-progress' : s}`);
            if (countEl) countEl.textContent = counts[s];
        });
    }

    function workFormHTML(data = {}) {
        return `
            <div class="form-group">
                <label>Work Item Title *</label>
                <input type="text" class="form-input" id="formWorkTitle" value="${esc(data.title || '')}" required placeholder="e.g. Design homepage layout">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Project</label>
                    <select class="form-select" id="formWorkProject">
                        <option value="">Unlinked</option>
                        ${projects.map(p => `<option value="${p.id}" ${data.projectId === p.id ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Status</label>
                    <select class="form-select" id="formWorkStatus">
                        ${['pending','in-progress','review','completed'].map(s =>
                            `<option value="${s}" ${data.status === s ? 'selected' : ''}>${formatStatus(s)}</option>`
                        ).join('')}
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Priority</label>
                    <select class="form-select" id="formWorkPriority">
                        ${['low','medium','high','urgent'].map(p =>
                            `<option value="${p}" ${(data.priority || 'medium') === p ? 'selected' : ''}>${p.charAt(0).toUpperCase() + p.slice(1)}</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Due Date</label>
                    <input type="date" class="form-input" id="formWorkDueDate" value="${data.dueDate || ''}">
                </div>
            </div>
            <div class="form-group">
                <label>Notes</label>
                <textarea class="form-textarea" id="formWorkNotes" placeholder="Additional details...">${esc(data.notes || '')}</textarea>
            </div>
            <div class="modal-actions">
                <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
                <button class="btn btn-primary" id="formWorkSave">Save Work Item</button>
            </div>
        `;
    }

    document.getElementById('addWorkBtn').addEventListener('click', () => {
        openModal('Add Work Item', workFormHTML());
        document.getElementById('formWorkSave').addEventListener('click', () => {
            const title = document.getElementById('formWorkTitle').value.trim();
            if (!title) return showToast('Title is required', 'error');
            works.push({
                id: genId(),
                title,
                projectId: document.getElementById('formWorkProject').value,
                status: document.getElementById('formWorkStatus').value,
                priority: document.getElementById('formWorkPriority').value,
                dueDate: document.getElementById('formWorkDueDate').value,
                notes: document.getElementById('formWorkNotes').value.trim(),
                createdAt: new Date().toISOString()
            });
            saveData(STORAGE_KEYS.works, works);
            closeModal();
            renderWorks();
            showToast('Work item added!');
        });
    });

    window.editWork = function(id) {
        const w = works.find(x => x.id === id);
        if (!w) return;
        openModal('Edit Work Item', workFormHTML(w));
        document.getElementById('formWorkSave').addEventListener('click', () => {
            const title = document.getElementById('formWorkTitle').value.trim();
            if (!title) return showToast('Title is required', 'error');
            w.title = title;
            w.projectId = document.getElementById('formWorkProject').value;
            w.status = document.getElementById('formWorkStatus').value;
            w.priority = document.getElementById('formWorkPriority').value;
            w.dueDate = document.getElementById('formWorkDueDate').value;
            w.notes = document.getElementById('formWorkNotes').value.trim();
            saveData(STORAGE_KEYS.works, works);
            closeModal();
            renderWorks();
            showToast('Work item updated!');
        });
    };

    window.deleteWork = async function(id) {
        if (!await customConfirm('Are you sure you want to delete this work item?')) return;
        works = works.filter(w => w.id !== id);
        saveData(STORAGE_KEYS.works, works);
        renderWorks();
        showToast('Work item deleted', 'info');
    };

    document.getElementById('filterWorkStatus').addEventListener('change', renderWorks);
    document.getElementById('filterWorkProject').addEventListener('change', renderWorks);
    document.getElementById('filterWorkSearch').addEventListener('input', renderWorks);

    // ==========================================
    // SETTINGS
    // ==========================================
    function renderSettings() {
        document.getElementById('settingName').value = settings.name || '';
        document.getElementById('settingEmail').value = settings.email || '';
        document.getElementById('settingPortfolioUrl').value = settings.portfolioUrl || '';
    }

    document.getElementById('saveProfileBtn').addEventListener('click', () => {
        settings.name = document.getElementById('settingName').value.trim();
        settings.email = document.getElementById('settingEmail').value.trim();
        settings.portfolioUrl = document.getElementById('settingPortfolioUrl').value.trim();
        localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
        showToast('Profile saved!');
    });

    document.getElementById('exportDataBtn').addEventListener('click', () => {
        const data = {
            projects,
            clients,
            portfolio,
            works,
            settings,
            exportedAt: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `dev-lakruwan-backup-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Data exported!');
    });

    document.getElementById('importDataInput').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                const data = JSON.parse(ev.target.result);
                if (data.projects) { projects = data.projects; saveData(STORAGE_KEYS.projects, projects); }
                if (data.clients) { clients = data.clients; saveData(STORAGE_KEYS.clients, clients); }
                if (data.portfolio) { portfolio = data.portfolio; saveData(STORAGE_KEYS.portfolio, portfolio); }
                if (data.works) { works = data.works; saveData(STORAGE_KEYS.works, works); }
                if (data.settings) { settings = data.settings; localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings)); }
                renderDashboard();
                showToast('Data imported successfully!');
            } catch {
                showToast('Invalid JSON file', 'error');
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    });

    document.getElementById('clearDataBtn').addEventListener('click', async () => {
        if (!await customConfirm('Are you sure you want to delete ALL data? This cannot be undone.', 'Warning: Delete All Data')) return;
        if (!await customConfirm('Really? This will erase everything and reset the admin dashboard.', 'Critical Confirmation')) return;
        projects = [];
        clients = [];
        portfolio = [];
        works = [];
        settings = {};
        Object.values(STORAGE_KEYS).forEach(k => localStorage.removeItem(k));
        renderDashboard();
        showToast('All data cleared', 'info');
    });

    // ==========================================
    // GLOBAL SEARCH
    // ==========================================
    globalSearch.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        if (!q) return;

        // Search across all data, switch to first match page
        const projMatch = projects.find(p => p.name.toLowerCase().includes(q));
        const clientMatch = clients.find(c => c.name.toLowerCase().includes(q));

        if (projMatch) {
            switchPage('projects');
            document.getElementById('filterProjectSearch').value = q;
            renderProjects();
        } else if (clientMatch) {
            switchPage('clients');
            document.getElementById('filterClientSearch').value = q;
            renderClients();
        }
    });

    // ==========================================
    // HELPERS
    // ==========================================
    function esc(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function formatDate(dateStr) {
        if (!dateStr) return '—';
        try {
            return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        } catch { return dateStr; }
    }

    function formatStatus(status) {
        if (!status) return '';
        return status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }

    function getInitials(name) {
        return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    }

    // ==========================================
    // INITIAL RENDER
    // ==========================================
    renderDashboard();
});

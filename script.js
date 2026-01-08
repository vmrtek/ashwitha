/* ============================================
   Ashwitha Reddy Portfolio - Interactive Elements
   Showcasing Airtable, Figma, Miro Skills
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initHeroMockup();
    initLoFiWireframes();
    initMidFiWireframes();
    initHiFiWireframes();
    initAirtableVisuals();
    initSchemaDigram();
    initUserFlowDiagram();
    initArtifacts();
    initProjectArtifacts();
    initToolDeepDives();
    initScrollAnimations();
});

/* ============================================
   Hero Mockup - Main Dashboard Preview
   ============================================ */
function initHeroMockup() {
    const container = document.getElementById('heroMockup');
    if (!container) return;

    container.innerHTML = `
        <svg viewBox="0 0 800 350" width="100%" height="100%" style="background: #0f0f17;">
            <!-- Sidebar -->
            <rect x="0" y="0" width="180" height="350" fill="#16161f"/>
            <rect x="15" y="15" width="150" height="28" rx="4" fill="#6366f1" opacity="0.2"/>
            <text x="30" y="34" fill="#6366f1" font-size="11" font-weight="600">RoadmapFlow</text>
            
            <!-- Sidebar Items -->
            <rect x="15" y="55" width="150" height="32" rx="6" fill="#6366f1" opacity="0.15"/>
            <circle cx="32" cy="71" r="7" fill="#6366f1" opacity="0.5"/>
            <rect x="48" y="66" width="70" height="10" rx="2" fill="#6366f1"/>
            
            <g opacity="0.6">
                <circle cx="32" cy="105" r="7" fill="#64748b" opacity="0.3"/>
                <rect x="48" y="100" width="60" height="10" rx="2" fill="#64748b"/>
            </g>
            
            <g opacity="0.6">
                <circle cx="32" cy="139" r="7" fill="#64748b" opacity="0.3"/>
                <rect x="48" y="134" width="80" height="10" rx="2" fill="#64748b"/>
            </g>
            
            <g opacity="0.6">
                <circle cx="32" cy="173" r="7" fill="#64748b" opacity="0.3"/>
                <rect x="48" y="168" width="50" height="10" rx="2" fill="#64748b"/>
            </g>
            
            <!-- Main Content Area -->
            <rect x="180" y="0" width="620" height="350" fill="#0a0a0f"/>
            
            <!-- Header -->
            <text x="200" y="35" fill="#f8fafc" font-size="16" font-weight="600">Q1 2025 Product Roadmap</text>
            <rect x="680" y="18" width="70" height="24" rx="12" fill="#6366f1"/>
            <text x="695" y="35" fill="white" font-size="9" font-weight="500">+ Add Item</text>
            
            <!-- Timeline Header -->
            <rect x="200" y="50" width="570" height="35" fill="#12121a" rx="6"/>
            <text x="260" y="72" fill="#64748b" font-size="10" text-anchor="middle">Jan</text>
            <text x="350" y="72" fill="#64748b" font-size="10" text-anchor="middle">Feb</text>
            <text x="440" y="72" fill="#64748b" font-size="10" text-anchor="middle">Mar</text>
            <text x="530" y="72" fill="#64748b" font-size="10" text-anchor="middle">Apr</text>
            <text x="620" y="72" fill="#64748b" font-size="10" text-anchor="middle">May</text>
            <text x="710" y="72" fill="#64748b" font-size="10" text-anchor="middle">Jun</text>
            
            <!-- Swimlanes -->
            <text x="210" y="110" fill="#94a3b8" font-size="9" font-weight="500">Platform</text>
            <rect x="260" y="95" width="160" height="26" rx="5" fill="#6366f1"/>
            <text x="275" y="112" fill="white" font-size="9">Auth System Overhaul</text>
            
            <text x="210" y="145" fill="#94a3b8" font-size="9" font-weight="500">API</text>
            <rect x="320" y="130" width="150" height="26" rx="5" fill="#8b5cf6"/>
            <text x="335" y="147" fill="white" font-size="9">GraphQL Migration</text>
            
            <text x="210" y="180" fill="#94a3b8" font-size="9" font-weight="500">Frontend</text>
            <rect x="280" y="165" width="100" height="26" rx="5" fill="#10b981"/>
            <text x="295" y="182" fill="white" font-size="9">Design System</text>
            <rect x="400" y="165" width="130" height="26" rx="5" fill="#10b981" opacity="0.7"/>
            <text x="415" y="182" fill="white" font-size="9">Dashboard v2</text>
            
            <text x="210" y="215" fill="#94a3b8" font-size="9" font-weight="500">Mobile</text>
            <rect x="350" y="200" width="170" height="26" rx="5" fill="#f59e0b"/>
            <text x="365" y="217" fill="white" font-size="9">iOS App 2.0</text>
            
            <text x="210" y="250" fill="#94a3b8" font-size="9" font-weight="500">Data</text>
            <rect x="240" y="235" width="110" height="26" rx="5" fill="#ef4444"/>
            <text x="255" y="252" fill="white" font-size="9">Analytics Pipeline</text>
            <rect x="450" y="235" width="90" height="26" rx="5" fill="#ef4444" opacity="0.6"/>
            <text x="465" y="252" fill="white" font-size="9">ML Models</text>
            
            <text x="210" y="285" fill="#94a3b8" font-size="9" font-weight="500">Infra</text>
            <rect x="300" y="270" width="80" height="26" rx="5" fill="#06b6d4"/>
            <text x="315" y="287" fill="white" font-size="9">K8s Upgrade</text>
            
            <!-- Legend -->
            <g transform="translate(210, 315)">
                <circle cx="0" cy="0" r="4" fill="#6366f1"/>
                <text x="10" y="4" fill="#64748b" font-size="8">In Progress</text>
                <circle cx="80" cy="0" r="4" fill="#10b981"/>
                <text x="90" y="4" fill="#64748b" font-size="8">Planned</text>
                <circle cx="145" cy="0" r="4" fill="#f59e0b"/>
                <text x="155" y="4" fill="#64748b" font-size="8">Review</text>
                <circle cx="200" cy="0" r="4" fill="#ef4444"/>
                <text x="210" y="4" fill="#64748b" font-size="8">Blocked</text>
            </g>
            
            <!-- Dependencies Lines -->
            <line x1="420" y1="108" x2="320" y2="143" stroke="#6366f1" stroke-width="1" stroke-dasharray="4" opacity="0.4"/>
        </svg>
    `;
}

/* ============================================
   Low-Fidelity Wireframes
   ============================================ */
function initLoFiWireframes() {
    // Timeline View Lo-Fi
    const lofi1 = document.getElementById('lofi1');
    if (lofi1) {
        lofi1.innerHTML = `
            <svg viewBox="0 0 300 200" width="100%" height="100%" style="background: #1e1e2a;">
                <!-- Sketchy style wireframe -->
                <rect x="10" y="10" width="60" height="180" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="4"/>
                <rect x="15" y="20" width="50" height="10" fill="#64748b" opacity="0.3"/>
                <rect x="15" y="40" width="45" height="8" fill="#64748b" opacity="0.2"/>
                <rect x="15" y="55" width="48" height="8" fill="#64748b" opacity="0.2"/>
                <rect x="15" y="70" width="42" height="8" fill="#64748b" opacity="0.2"/>
                
                <!-- Main area -->
                <rect x="80" y="10" width="210" height="30" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="4"/>
                <text x="90" y="30" fill="#64748b" font-size="10">HEADER</text>
                
                <!-- Timeline rows -->
                <rect x="80" y="50" width="210" height="25" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
                <rect x="100" y="55" width="80" height="15" rx="3" fill="#6366f1" opacity="0.4"/>
                
                <rect x="80" y="80" width="210" height="25" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
                <rect x="140" y="85" width="100" height="15" rx="3" fill="#8b5cf6" opacity="0.4"/>
                
                <rect x="80" y="110" width="210" height="25" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
                <rect x="120" y="115" width="60" height="15" rx="3" fill="#10b981" opacity="0.4"/>
                <rect x="190" y="115" width="70" height="15" rx="3" fill="#10b981" opacity="0.3"/>
                
                <rect x="80" y="140" width="210" height="25" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
                <rect x="160" y="145" width="90" height="15" rx="3" fill="#f59e0b" opacity="0.4"/>
                
                <!-- Annotation -->
                <circle cx="270" cy="170" r="12" fill="none" stroke="#f59e0b" stroke-width="1"/>
                <text x="270" y="174" fill="#f59e0b" font-size="10" text-anchor="middle">1</text>
                <line x1="258" y1="170" x2="200" y2="152" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2"/>
            </svg>
        `;
    }

    // Kanban Lo-Fi
    const lofi2 = document.getElementById('lofi2');
    if (lofi2) {
        lofi2.innerHTML = `
            <svg viewBox="0 0 300 200" width="100%" height="100%" style="background: #1e1e2a;">
                <!-- Columns -->
                <rect x="10" y="30" width="85" height="160" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="20" fill="#64748b" font-size="9">BACKLOG</text>
                
                <rect x="105" y="30" width="85" height="160" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="4"/>
                <text x="115" y="20" fill="#64748b" font-size="9">IN PROGRESS</text>
                
                <rect x="200" y="30" width="90" height="160" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="4"/>
                <text x="220" y="20" fill="#64748b" font-size="9">DONE</text>
                
                <!-- Cards in columns -->
                <rect x="18" y="40" width="70" height="35" rx="4" fill="#64748b" opacity="0.2"/>
                <rect x="23" y="47" width="40" height="6" fill="#64748b" opacity="0.4"/>
                <rect x="23" y="58" width="55" height="4" fill="#64748b" opacity="0.2"/>
                <rect x="23" y="65" width="30" height="4" fill="#64748b" opacity="0.2"/>
                
                <rect x="18" y="82" width="70" height="35" rx="4" fill="#64748b" opacity="0.2"/>
                <rect x="18" y="124" width="70" height="35" rx="4" fill="#64748b" opacity="0.2"/>
                
                <rect x="113" y="40" width="70" height="35" rx="4" fill="#6366f1" opacity="0.3"/>
                <rect x="113" y="82" width="70" height="35" rx="4" fill="#6366f1" opacity="0.3"/>
                
                <rect x="208" y="40" width="74" height="35" rx="4" fill="#10b981" opacity="0.3"/>
                <rect x="208" y="82" width="74" height="35" rx="4" fill="#10b981" opacity="0.3"/>
                <rect x="208" y="124" width="74" height="35" rx="4" fill="#10b981" opacity="0.3"/>
            </svg>
        `;
    }

    // Gantt Lo-Fi
    const lofi3 = document.getElementById('lofi3');
    if (lofi3) {
        lofi3.innerHTML = `
            <svg viewBox="0 0 300 200" width="100%" height="100%" style="background: #1e1e2a;">
                <!-- Left panel -->
                <rect x="10" y="30" width="80" height="160" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="4"/>
                <rect x="15" y="50" width="60" height="8" fill="#64748b" opacity="0.3"/>
                <rect x="15" y="75" width="55" height="8" fill="#64748b" opacity="0.3"/>
                <rect x="15" y="100" width="65" height="8" fill="#64748b" opacity="0.3"/>
                <rect x="15" y="125" width="50" height="8" fill="#64748b" opacity="0.3"/>
                <rect x="15" y="150" width="58" height="8" fill="#64748b" opacity="0.3"/>
                
                <!-- Grid -->
                <line x1="100" y1="30" x2="100" y2="190" stroke="#64748b" stroke-width="0.5" opacity="0.3"/>
                <line x1="150" y1="30" x2="150" y2="190" stroke="#64748b" stroke-width="0.5" opacity="0.3"/>
                <line x1="200" y1="30" x2="200" y2="190" stroke="#64748b" stroke-width="0.5" opacity="0.3"/>
                <line x1="250" y1="30" x2="250" y2="190" stroke="#64748b" stroke-width="0.5" opacity="0.3"/>
                
                <!-- Time labels -->
                <text x="120" y="20" fill="#64748b" font-size="8">W1</text>
                <text x="170" y="20" fill="#64748b" font-size="8">W2</text>
                <text x="220" y="20" fill="#64748b" font-size="8">W3</text>
                <text x="270" y="20" fill="#64748b" font-size="8">W4</text>
                
                <!-- Bars -->
                <rect x="100" y="47" width="80" height="14" rx="2" fill="#6366f1" opacity="0.5"/>
                <rect x="130" y="72" width="100" height="14" rx="2" fill="#8b5cf6" opacity="0.5"/>
                <rect x="100" y="97" width="50" height="14" rx="2" fill="#10b981" opacity="0.5"/>
                <rect x="160" y="97" width="70" height="14" rx="2" fill="#10b981" opacity="0.4"/>
                <rect x="150" y="122" width="90" height="14" rx="2" fill="#f59e0b" opacity="0.5"/>
                <rect x="100" y="147" width="60" height="14" rx="2" fill="#ef4444" opacity="0.5"/>
                
                <!-- Dependencies -->
                <path d="M 180 54 Q 200 54, 200 72" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="2"/>
                <circle cx="200" cy="72" r="3" fill="#64748b"/>
            </svg>
        `;
    }
}

/* ============================================
   Mid-Fidelity Wireframes
   ============================================ */
function initMidFiWireframes() {
    const midfi1 = document.getElementById('midfi1');
    if (midfi1) {
        midfi1.innerHTML = `
            <svg viewBox="0 0 400 280" width="100%" height="100%" style="background: #12121a;">
                <!-- Sidebar -->
                <rect x="0" y="0" width="80" height="280" fill="#16161f"/>
                <rect x="12" y="15" width="56" height="20" rx="4" fill="#6366f1" opacity="0.3"/>
                <rect x="12" y="50" width="56" height="28" rx="6" fill="#6366f1" opacity="0.2"/>
                <rect x="12" y="85" width="56" height="28" rx="6" fill="transparent" stroke="#64748b" stroke-width="1" opacity="0.3"/>
                <rect x="12" y="120" width="56" height="28" rx="6" fill="transparent" stroke="#64748b" stroke-width="1" opacity="0.3"/>
                <rect x="12" y="155" width="56" height="28" rx="6" fill="transparent" stroke="#64748b" stroke-width="1" opacity="0.3"/>
                
                <!-- Header -->
                <rect x="95" y="15" width="150" height="18" rx="2" fill="#f8fafc"/>
                <rect x="330" y="12" width="55" height="24" rx="12" fill="#6366f1"/>
                
                <!-- Stats Cards -->
                <rect x="95" y="50" width="90" height="60" rx="8" fill="#1a1a26"/>
                <text x="105" y="72" fill="#64748b" font-size="8">Total Features</text>
                <text x="105" y="95" fill="#f8fafc" font-size="18" font-weight="600">47</text>
                
                <rect x="195" y="50" width="90" height="60" rx="8" fill="#1a1a26"/>
                <text x="205" y="72" fill="#64748b" font-size="8">In Progress</text>
                <text x="205" y="95" fill="#6366f1" font-size="18" font-weight="600">12</text>
                
                <rect x="295" y="50" width="90" height="60" rx="8" fill="#1a1a26"/>
                <text x="305" y="72" fill="#64748b" font-size="8">Completed</text>
                <text x="305" y="95" fill="#10b981" font-size="18" font-weight="600">28</text>
                
                <!-- Timeline Section -->
                <rect x="95" y="125" width="290" height="140" rx="8" fill="#1a1a26"/>
                <rect x="105" y="135" width="80" height="10" rx="2" fill="#64748b"/>
                
                <!-- Mini Timeline -->
                <rect x="105" y="155" width="270" height="20" fill="#0f0f17" rx="4"/>
                <text x="130" y="169" fill="#64748b" font-size="7" text-anchor="middle">Jan</text>
                <text x="180" y="169" fill="#64748b" font-size="7" text-anchor="middle">Feb</text>
                <text x="230" y="169" fill="#64748b" font-size="7" text-anchor="middle">Mar</text>
                <text x="280" y="169" fill="#64748b" font-size="7" text-anchor="middle">Apr</text>
                <text x="330" y="169" fill="#64748b" font-size="7" text-anchor="middle">May</text>
                
                <!-- Rows -->
                <rect x="105" y="185" width="100" height="16" rx="4" fill="#6366f1"/>
                <rect x="140" y="205" width="80" height="16" rx="4" fill="#8b5cf6"/>
                <rect x="115" y="225" width="60" height="16" rx="4" fill="#10b981"/>
                <rect x="200" y="225" width="90" height="16" rx="4" fill="#f59e0b"/>
                <rect x="180" y="245" width="70" height="16" rx="4" fill="#ef4444"/>
            </svg>
        `;
    }

    const midfi2 = document.getElementById('midfi2');
    if (midfi2) {
        midfi2.innerHTML = `
            <svg viewBox="0 0 400 280" width="100%" height="100%" style="background: #12121a;">
                <!-- Panel -->
                <rect x="20" y="20" width="360" height="240" rx="12" fill="#16161f" stroke="#6366f1" stroke-width="1" opacity="0.5"/>
                
                <!-- Header -->
                <rect x="35" y="35" width="200" height="16" rx="2" fill="#f8fafc"/>
                <rect x="340" y="32" width="24" height="24" rx="6" fill="#64748b" opacity="0.3"/>
                
                <!-- Status Badge -->
                <rect x="35" y="60" width="60" height="18" rx="9" fill="#6366f1" opacity="0.2"/>
                <text x="50" y="72" fill="#6366f1" font-size="8">In Progress</text>
                
                <!-- Description -->
                <rect x="35" y="90" width="330" height="8" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="35" y="103" width="280" height="8" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="35" y="116" width="310" height="8" rx="1" fill="#64748b" opacity="0.4"/>
                
                <!-- Meta Grid -->
                <g transform="translate(35, 140)">
                    <rect x="0" y="0" width="100" height="50" rx="6" fill="#1a1a26"/>
                    <text x="10" y="18" fill="#64748b" font-size="7">Priority</text>
                    <rect x="10" y="28" width="40" height="12" rx="6" fill="#ef4444" opacity="0.3"/>
                    <text x="20" y="37" fill="#ef4444" font-size="7">High</text>
                    
                    <rect x="110" y="0" width="100" height="50" rx="6" fill="#1a1a26"/>
                    <text x="120" y="18" fill="#64748b" font-size="7">Timeline</text>
                    <text x="120" y="37" fill="#f8fafc" font-size="9">Jan - Mar 2025</text>
                    
                    <rect x="220" y="0" width="110" height="50" rx="6" fill="#1a1a26"/>
                    <text x="230" y="18" fill="#64748b" font-size="7">Team</text>
                    <circle cx="240" cy="35" r="10" fill="#6366f1"/>
                    <circle cx="255" cy="35" r="10" fill="#8b5cf6"/>
                    <circle cx="270" cy="35" r="10" fill="#a78bfa"/>
                    <text x="290" y="38" fill="#64748b" font-size="8">+3</text>
                </g>
                
                <!-- Dependencies -->
                <text x="35" y="210" fill="#64748b" font-size="8">Dependencies</text>
                <rect x="35" y="220" width="150" height="24" rx="4" fill="#1a1a26"/>
                <rect x="45" y="226" width="80" height="10" rx="2" fill="#64748b" opacity="0.4"/>
                <rect x="195" y="220" width="150" height="24" rx="4" fill="#1a1a26"/>
                <rect x="205" y="226" width="90" height="10" rx="2" fill="#64748b" opacity="0.4"/>
            </svg>
        `;
    }
}

/* ============================================
   High-Fidelity Wireframes
   ============================================ */
function initHiFiWireframes() {
    const hifi1 = document.getElementById('hifi1');
    if (hifi1) {
        hifi1.innerHTML = `
            <svg viewBox="0 0 600 450" width="100%" height="100%" style="background: #0a0a0f;">
                <!-- Full Dashboard View -->
                <rect x="0" y="0" width="150" height="450" fill="#12121a"/>
                
                <!-- Logo -->
                <rect x="15" y="15" width="120" height="26" rx="5" fill="#6366f1" opacity="0.2"/>
                <text x="28" y="33" fill="#6366f1" font-size="11" font-weight="600">RoadmapFlow</text>
                
                <!-- Nav Items -->
                <rect x="12" y="58" width="126" height="32" rx="7" fill="#6366f1" opacity="0.15"/>
                <circle cx="30" cy="74" r="7" fill="#6366f1" opacity="0.5"/>
                <rect x="44" y="68" width="65" height="10" rx="2" fill="#6366f1"/>
                
                <g opacity="0.5">
                    <circle cx="30" cy="108" r="7" fill="#64748b" opacity="0.4"/>
                    <rect x="44" y="102" width="55" height="10" rx="2" fill="#64748b"/>
                </g>
                <g opacity="0.5">
                    <circle cx="30" cy="140" r="7" fill="#64748b" opacity="0.4"/>
                    <rect x="44" y="134" width="72" height="10" rx="2" fill="#64748b"/>
                </g>
                <g opacity="0.5">
                    <circle cx="30" cy="172" r="7" fill="#64748b" opacity="0.4"/>
                    <rect x="44" y="166" width="45" height="10" rx="2" fill="#64748b"/>
                </g>
                
                <!-- User -->
                <circle cx="35" cy="420" r="14" fill="#6366f1"/>
                <text x="35" y="425" fill="white" font-size="9" text-anchor="middle">AR</text>
                <rect x="56" y="413" width="55" height="9" rx="2" fill="#f8fafc"/>
                <rect x="56" y="425" width="35" height="7" rx="2" fill="#64748b"/>
                
                <!-- Main Content -->
                <rect x="165" y="18" width="220" height="20" rx="3" fill="#f8fafc"/>
                <rect x="520" y="15" width="55" height="26" rx="13" fill="#6366f1"/>
                
                <!-- View Tabs -->
                <g transform="translate(165, 50)">
                    <rect x="0" y="0" width="65" height="26" rx="5" fill="#6366f1" opacity="0.15"/>
                    <text x="12" y="17" fill="#6366f1" font-size="9">Timeline</text>
                    <rect x="75" y="0" width="55" height="26" rx="5" fill="transparent"/>
                    <text x="85" y="17" fill="#64748b" font-size="9">Board</text>
                    <rect x="140" y="0" width="50" height="26" rx="5" fill="transparent"/>
                    <text x="150" y="17" fill="#64748b" font-size="9">Table</text>
                </g>
                
                <!-- Timeline -->
                <rect x="165" y="90" width="415" height="340" rx="10" fill="#12121a"/>
                
                <!-- Month Headers -->
                <g transform="translate(225, 108)">
                    <text x="0" y="0" fill="#64748b" font-size="9" text-anchor="middle">Jan</text>
                    <text x="75" y="0" fill="#64748b" font-size="9" text-anchor="middle">Feb</text>
                    <text x="150" y="0" fill="#64748b" font-size="9" text-anchor="middle">Mar</text>
                    <text x="225" y="0" fill="#64748b" font-size="9" text-anchor="middle">Apr</text>
                    <text x="300" y="0" fill="#64748b" font-size="9" text-anchor="middle">May</text>
                </g>
                
                <!-- Grid lines -->
                <line x1="225" y1="118" x2="225" y2="410" stroke="#64748b" stroke-width="0.5" opacity="0.2"/>
                <line x1="300" y1="118" x2="300" y2="410" stroke="#64748b" stroke-width="0.5" opacity="0.2"/>
                <line x1="375" y1="118" x2="375" y2="410" stroke="#64748b" stroke-width="0.5" opacity="0.2"/>
                <line x1="450" y1="118" x2="450" y2="410" stroke="#64748b" stroke-width="0.5" opacity="0.2"/>
                
                <!-- Swimlanes -->
                <text x="180" y="145" fill="#94a3b8" font-size="9">Platform</text>
                <rect x="225" y="130" width="140" height="25" rx="5" fill="#6366f1"/>
                <text x="237" y="147" fill="white" font-size="8">Auth System Overhaul</text>
                <circle cx="352" cy="143" r="7" fill="#0a0a0f"/>
                <text x="352" y="146" fill="#6366f1" font-size="6" text-anchor="middle">P1</text>
                
                <text x="180" y="180" fill="#94a3b8" font-size="9">API</text>
                <rect x="270" y="165" width="160" height="25" rx="5" fill="#8b5cf6"/>
                <text x="282" y="182" fill="white" font-size="8">GraphQL Migration</text>
                
                <text x="180" y="215" fill="#94a3b8" font-size="9">Frontend</text>
                <rect x="235" y="200" width="90" height="25" rx="5" fill="#10b981"/>
                <text x="247" y="217" fill="white" font-size="8">Design System</text>
                <rect x="345" y="200" width="120" height="25" rx="5" fill="#10b981" opacity="0.7"/>
                <text x="357" y="217" fill="white" font-size="8">Dashboard v2</text>
                
                <text x="180" y="250" fill="#94a3b8" font-size="9">Mobile</text>
                <rect x="300" y="235" width="150" height="25" rx="5" fill="#f59e0b"/>
                <text x="312" y="252" fill="white" font-size="8">iOS App 2.0</text>
                
                <text x="180" y="285" fill="#94a3b8" font-size="9">Data</text>
                <rect x="210" y="270" width="105" height="25" rx="5" fill="#ef4444"/>
                <text x="222" y="287" fill="white" font-size="8">Analytics Pipeline</text>
                <rect x="380" y="270" width="85" height="25" rx="5" fill="#ef4444" opacity="0.6"/>
                <text x="392" y="287" fill="white" font-size="8">ML Models</text>
                
                <text x="180" y="320" fill="#94a3b8" font-size="9">Infra</text>
                <rect x="250" y="305" width="75" height="25" rx="5" fill="#06b6d4"/>
                <text x="262" y="322" fill="white" font-size="8">K8s Upgrade</text>
                
                <!-- Dependencies -->
                <line x1="365" y1="143" x2="365" y2="165" stroke="#6366f1" stroke-width="1.5" opacity="0.4"/>
                <circle cx="365" cy="165" r="3" fill="#6366f1"/>
                
                <!-- Legend -->
                <g transform="translate(180, 365)">
                    <circle cx="0" cy="0" r="4" fill="#6366f1"/>
                    <text x="10" y="4" fill="#64748b" font-size="7">In Progress</text>
                    <circle cx="75" cy="0" r="4" fill="#10b981"/>
                    <text x="85" y="4" fill="#64748b" font-size="7">Planned</text>
                    <circle cx="140" cy="0" r="4" fill="#f59e0b"/>
                    <text x="150" y="4" fill="#64748b" font-size="7">Review</text>
                    <circle cx="200" cy="0" r="4" fill="#ef4444"/>
                    <text x="210" y="4" fill="#64748b" font-size="7">Blocked</text>
                </g>
            </svg>
        `;
    }

    // Thumbnails
    const hifi2 = document.getElementById('hifi2');
    if (hifi2) {
        hifi2.innerHTML = `
            <svg viewBox="0 0 200 130" width="100%" height="100%" style="background: #0a0a0f;">
                <rect x="0" y="0" width="45" height="130" fill="#12121a"/>
                <rect x="55" y="8" width="138" height="114" rx="5" fill="#16161f"/>
                <!-- Kanban mini -->
                <rect x="62" y="22" width="38" height="90" fill="#1a1a26" rx="3"/>
                <rect x="105" y="22" width="38" height="90" fill="#1a1a26" rx="3"/>
                <rect x="148" y="22" width="38" height="90" fill="#1a1a26" rx="3"/>
                <rect x="67" y="30" width="28" height="20" rx="2" fill="#6366f1" opacity="0.5"/>
                <rect x="67" y="55" width="28" height="15" rx="2" fill="#6366f1" opacity="0.3"/>
                <rect x="110" y="30" width="28" height="18" rx="2" fill="#8b5cf6" opacity="0.5"/>
                <rect x="153" y="30" width="28" height="22" rx="2" fill="#10b981" opacity="0.5"/>
                <rect x="153" y="57" width="28" height="16" rx="2" fill="#10b981" opacity="0.4"/>
            </svg>
        `;
    }

    const hifi3 = document.getElementById('hifi3');
    if (hifi3) {
        hifi3.innerHTML = `
            <svg viewBox="0 0 200 130" width="100%" height="100%" style="background: #0a0a0f;">
                <rect x="0" y="0" width="45" height="130" fill="#12121a"/>
                <rect x="55" y="8" width="138" height="114" rx="5" fill="#16161f"/>
                <!-- Table mini -->
                <rect x="62" y="22" width="124" height="12" fill="#1a1a26" rx="2"/>
                <rect x="62" y="38" width="124" height="18" fill="transparent" stroke="#64748b" stroke-width="0.5" rx="2"/>
                <rect x="62" y="60" width="124" height="18" fill="transparent" stroke="#64748b" stroke-width="0.5" rx="2"/>
                <rect x="62" y="82" width="124" height="18" fill="transparent" stroke="#64748b" stroke-width="0.5" rx="2"/>
                <rect x="68" y="44" width="35" height="6" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="68" y="66" width="40" height="6" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="68" y="88" width="30" height="6" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="150" y="43" width="28" height="8" rx="4" fill="#6366f1" opacity="0.4"/>
                <rect x="150" y="65" width="28" height="8" rx="4" fill="#10b981" opacity="0.4"/>
                <rect x="150" y="87" width="28" height="8" rx="4" fill="#f59e0b" opacity="0.4"/>
            </svg>
        `;
    }

    const hifi4 = document.getElementById('hifi4');
    if (hifi4) {
        hifi4.innerHTML = `
            <svg viewBox="0 0 200 130" width="100%" height="100%" style="background: #0a0a0f;">
                <rect x="0" y="0" width="45" height="130" fill="#12121a"/>
                <rect x="55" y="8" width="138" height="114" rx="5" fill="#16161f"/>
                <!-- Gallery mini -->
                <rect x="62" y="22" width="55" height="42" rx="4" fill="#1a1a26"/>
                <rect x="122" y="22" width="55" height="42" rx="4" fill="#1a1a26"/>
                <rect x="62" y="70" width="55" height="42" rx="4" fill="#1a1a26"/>
                <rect x="122" y="70" width="55" height="42" rx="4" fill="#1a1a26"/>
                <rect x="67" y="27" width="45" height="22" rx="2" fill="#6366f1" opacity="0.3"/>
                <rect x="127" y="27" width="45" height="22" rx="2" fill="#8b5cf6" opacity="0.3"/>
                <rect x="67" y="75" width="45" height="22" rx="2" fill="#10b981" opacity="0.3"/>
                <rect x="127" y="75" width="45" height="22" rx="2" fill="#f59e0b" opacity="0.3"/>
            </svg>
        `;
    }
}

/* ============================================
   Airtable Visualizations
   ============================================ */
function initAirtableVisuals() {
    // Timeline View
    const timeline = document.getElementById('airtableTimeline');
    if (timeline) {
        timeline.innerHTML = `
            <svg viewBox="0 0 500 350" width="100%" height="100%" style="background: #0f0f17;">
                <!-- Airtable-style header -->
                <rect x="0" y="0" width="500" height="42" fill="#16161f"/>
                <rect x="12" y="10" width="85" height="22" rx="4" fill="#18bfff"/>
                <text x="28" y="25" fill="white" font-size="9" font-weight="500">Timeline</text>
                <rect x="105" y="10" width="60" height="22" rx="4" fill="transparent" stroke="#64748b" stroke-width="1"/>
                <text x="118" y="25" fill="#64748b" font-size="9">Kanban</text>
                <rect x="173" y="10" width="55" height="22" rx="4" fill="transparent" stroke="#64748b" stroke-width="1"/>
                <text x="184" y="25" fill="#64748b" font-size="9">Gallery</text>
                
                <!-- Filter Bar -->
                <rect x="360" y="10" width="55" height="22" rx="4" fill="#1a1a26"/>
                <text x="373" y="25" fill="#64748b" font-size="8">Filter</text>
                <rect x="423" y="10" width="60" height="22" rx="4" fill="#1a1a26"/>
                <text x="436" y="25" fill="#64748b" font-size="8">Group</text>
                
                <!-- Timeline content -->
                <rect x="12" y="52" width="476" height="285" rx="8" fill="#12121a"/>
                
                <!-- Months -->
                <g transform="translate(90, 72)">
                    <text x="0" y="0" fill="#94a3b8" font-size="10" font-weight="500">January</text>
                    <text x="95" y="0" fill="#94a3b8" font-size="10" font-weight="500">February</text>
                    <text x="200" y="0" fill="#94a3b8" font-size="10" font-weight="500">March</text>
                    <text x="295" y="0" fill="#94a3b8" font-size="10" font-weight="500">April</text>
                </g>
                
                <!-- Vertical lines -->
                <line x1="90" y1="82" x2="90" y2="320" stroke="#64748b" stroke-width="0.5" opacity="0.2"/>
                <line x1="185" y1="82" x2="185" y2="320" stroke="#64748b" stroke-width="0.5" opacity="0.2"/>
                <line x1="280" y1="82" x2="280" y2="320" stroke="#64748b" stroke-width="0.5" opacity="0.2"/>
                <line x1="375" y1="82" x2="375" y2="320" stroke="#64748b" stroke-width="0.5" opacity="0.2"/>
                
                <!-- Rows -->
                <text x="28" y="110" fill="#64748b" font-size="8">Platform</text>
                <rect x="90" y="95" width="120" height="22" rx="4" fill="#6366f1"/>
                <text x="100" y="110" fill="white" font-size="8">Auth System</text>
                <circle cx="200" cy="106" r="7" fill="#0f0f17"/>
                <text x="200" y="109" fill="#6366f1" font-size="6" text-anchor="middle">P1</text>
                
                <text x="28" y="145" fill="#64748b" font-size="8">API</text>
                <rect x="140" y="130" width="140" height="22" rx="4" fill="#8b5cf6"/>
                <text x="150" y="145" fill="white" font-size="8">GraphQL Migration</text>
                
                <text x="28" y="180" fill="#64748b" font-size="8">Frontend</text>
                <rect x="110" y="165" width="75" height="22" rx="4" fill="#10b981"/>
                <text x="120" y="180" fill="white" font-size="8">Design Sys</text>
                <rect x="200" y="165" width="110" height="22" rx="4" fill="#10b981" opacity="0.7"/>
                <text x="210" y="180" fill="white" font-size="8">Dashboard</text>
                
                <text x="28" y="215" fill="#64748b" font-size="8">Mobile</text>
                <rect x="185" y="200" width="140" height="22" rx="4" fill="#f59e0b"/>
                <text x="195" y="215" fill="white" font-size="8">iOS App v2.0</text>
                
                <text x="28" y="250" fill="#64748b" font-size="8">Data</text>
                <rect x="90" y="235" width="90" height="22" rx="4" fill="#ef4444"/>
                <text x="100" y="250" fill="white" font-size="8">Analytics</text>
                <rect x="260" y="235" width="80" height="22" rx="4" fill="#ef4444" opacity="0.6"/>
                <text x="270" y="250" fill="white" font-size="8">ML Models</text>
                
                <text x="28" y="285" fill="#64748b" font-size="8">Infra</text>
                <rect x="130" y="270" width="75" height="22" rx="4" fill="#06b6d4"/>
                <text x="140" y="285" fill="white" font-size="8">K8s Upgrade</text>
                
                <!-- Dependency line -->
                <path d="M 210 106 L 210 120 L 140 120 L 140 130" fill="none" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3"/>
                <circle cx="140" cy="130" r="3" fill="#6366f1"/>
            </svg>
        `;
    }

    // Kanban Board
    const kanban = document.getElementById('airtableKanban');
    if (kanban) {
        kanban.innerHTML = `
            <svg viewBox="0 0 500 350" width="100%" height="100%" style="background: #0f0f17;">
                <!-- Airtable header -->
                <rect x="0" y="0" width="500" height="42" fill="#16161f"/>
                <rect x="12" y="10" width="60" height="22" rx="4" fill="transparent" stroke="#64748b" stroke-width="1"/>
                <text x="25" y="25" fill="#64748b" font-size="9">Timeline</text>
                <rect x="80" y="10" width="60" height="22" rx="4" fill="#18bfff"/>
                <text x="92" y="25" fill="white" font-size="9" font-weight="500">Kanban</text>
                <rect x="148" y="10" width="55" height="22" rx="4" fill="transparent" stroke="#64748b" stroke-width="1"/>
                <text x="160" y="25" fill="#64748b" font-size="9">Gallery</text>
                
                <!-- Kanban Columns -->
                <g transform="translate(15, 52)">
                    <!-- Backlog -->
                    <rect x="0" y="0" width="110" height="285" rx="8" fill="#12121a"/>
                    <text x="12" y="22" fill="#64748b" font-size="9" font-weight="500">Backlog</text>
                    <text x="85" y="22" fill="#64748b" font-size="8">4</text>
                    
                    <rect x="8" y="35" width="94" height="52" rx="5" fill="#16161f" stroke="#64748b" stroke-width="0.5"/>
                    <rect x="15" y="43" width="50" height="7" rx="2" fill="#f8fafc"/>
                    <rect x="15" y="54" width="72" height="5" rx="1" fill="#64748b" opacity="0.4"/>
                    <rect x="15" y="65" width="35" height="12" rx="6" fill="#64748b" opacity="0.2"/>
                    
                    <rect x="8" y="95" width="94" height="52" rx="5" fill="#16161f" stroke="#64748b" stroke-width="0.5"/>
                    <rect x="8" y="155" width="94" height="52" rx="5" fill="#16161f" stroke="#64748b" stroke-width="0.5"/>
                    <rect x="8" y="215" width="94" height="35" rx="5" fill="#16161f" stroke="#64748b" stroke-width="0.5"/>
                    
                    <!-- In Progress -->
                    <rect x="118" y="0" width="110" height="285" rx="8" fill="#12121a"/>
                    <text x="130" y="22" fill="#6366f1" font-size="9" font-weight="500">In Progress</text>
                    <text x="205" y="22" fill="#64748b" font-size="8">3</text>
                    
                    <rect x="126" y="35" width="94" height="56" rx="5" fill="#16161f" stroke="#6366f1" stroke-width="1"/>
                    <rect x="133" y="43" width="55" height="7" rx="2" fill="#f8fafc"/>
                    <rect x="133" y="54" width="72" height="5" rx="1" fill="#64748b" opacity="0.4"/>
                    <rect x="133" y="68" width="42" height="12" rx="6" fill="#6366f1" opacity="0.3"/>
                    <text x="145" y="77" fill="#6366f1" font-size="6">Platform</text>
                    
                    <rect x="126" y="98" width="94" height="52" rx="5" fill="#16161f" stroke="#6366f1" stroke-width="1"/>
                    <rect x="126" y="158" width="94" height="52" rx="5" fill="#16161f" stroke="#6366f1" stroke-width="1"/>
                    
                    <!-- Review -->
                    <rect x="236" y="0" width="110" height="285" rx="8" fill="#12121a"/>
                    <text x="248" y="22" fill="#f59e0b" font-size="9" font-weight="500">Review</text>
                    <text x="318" y="22" fill="#64748b" font-size="8">2</text>
                    
                    <rect x="244" y="35" width="94" height="52" rx="5" fill="#16161f" stroke="#f59e0b" stroke-width="1"/>
                    <rect x="244" y="95" width="94" height="52" rx="5" fill="#16161f" stroke="#f59e0b" stroke-width="1"/>
                    
                    <!-- Done -->
                    <rect x="354" y="0" width="110" height="285" rx="8" fill="#12121a"/>
                    <text x="366" y="22" fill="#10b981" font-size="9" font-weight="500">Done</text>
                    <text x="435" y="22" fill="#64748b" font-size="8">5</text>
                    
                    <rect x="362" y="35" width="94" height="48" rx="5" fill="#16161f" stroke="#10b981" stroke-width="1"/>
                    <rect x="362" y="90" width="94" height="48" rx="5" fill="#16161f" stroke="#10b981" stroke-width="1"/>
                    <rect x="362" y="145" width="94" height="48" rx="5" fill="#16161f" stroke="#10b981" stroke-width="1"/>
                    <rect x="362" y="200" width="94" height="48" rx="5" fill="#16161f" stroke="#10b981" stroke-width="1"/>
                </g>
            </svg>
        `;
    }

    // Gallery View
    const gallery = document.getElementById('airtableGallery');
    if (gallery) {
        gallery.innerHTML = `
            <svg viewBox="0 0 500 350" width="100%" height="100%" style="background: #0f0f17;">
                <!-- Header -->
                <rect x="0" y="0" width="500" height="42" fill="#16161f"/>
                <rect x="12" y="10" width="60" height="22" rx="4" fill="transparent" stroke="#64748b" stroke-width="1"/>
                <text x="25" y="25" fill="#64748b" font-size="9">Timeline</text>
                <rect x="80" y="10" width="60" height="22" rx="4" fill="transparent" stroke="#64748b" stroke-width="1"/>
                <text x="92" y="25" fill="#64748b" font-size="9">Kanban</text>
                <rect x="148" y="10" width="55" height="22" rx="4" fill="#18bfff"/>
                <text x="160" y="25" fill="white" font-size="9" font-weight="500">Gallery</text>
                
                <!-- Gallery Grid -->
                <g transform="translate(15, 52)">
                    <!-- Card 1 -->
                    <rect x="0" y="0" width="148" height="125" rx="8" fill="#12121a" stroke="#6366f1" stroke-width="1"/>
                    <rect x="8" y="8" width="132" height="52" rx="5" fill="#6366f1" opacity="0.2"/>
                    <rect x="18" y="25" width="60" height="18" rx="3" fill="#6366f1" opacity="0.4"/>
                    <rect x="8" y="68" width="95" height="9" rx="2" fill="#f8fafc"/>
                    <rect x="8" y="82" width="115" height="5" rx="1" fill="#64748b" opacity="0.4"/>
                    <rect x="8" y="100" width="45" height="14" rx="7" fill="#6366f1" opacity="0.2"/>
                    <text x="18" y="110" fill="#6366f1" font-size="6">Platform</text>
                    <circle cx="128" cy="107" r="9" fill="#6366f1"/>
                    
                    <!-- Card 2 -->
                    <rect x="158" y="0" width="148" height="125" rx="8" fill="#12121a" stroke="#8b5cf6" stroke-width="1"/>
                    <rect x="166" y="8" width="132" height="52" rx="5" fill="#8b5cf6" opacity="0.2"/>
                    <rect x="176" y="25" width="70" height="18" rx="3" fill="#8b5cf6" opacity="0.4"/>
                    <rect x="166" y="68" width="105" height="9" rx="2" fill="#f8fafc"/>
                    <rect x="166" y="82" width="120" height="5" rx="1" fill="#64748b" opacity="0.4"/>
                    <rect x="166" y="100" width="28" height="14" rx="7" fill="#8b5cf6" opacity="0.2"/>
                    <text x="173" y="110" fill="#8b5cf6" font-size="6">API</text>
                    
                    <!-- Card 3 -->
                    <rect x="316" y="0" width="148" height="125" rx="8" fill="#12121a" stroke="#10b981" stroke-width="1"/>
                    <rect x="324" y="8" width="132" height="52" rx="5" fill="#10b981" opacity="0.2"/>
                    <rect x="334" y="25" width="55" height="18" rx="3" fill="#10b981" opacity="0.4"/>
                    <rect x="324" y="68" width="88" height="9" rx="2" fill="#f8fafc"/>
                    <rect x="324" y="82" width="105" height="5" rx="1" fill="#64748b" opacity="0.4"/>
                    <rect x="324" y="100" width="48" height="14" rx="7" fill="#10b981" opacity="0.2"/>
                    <text x="332" y="110" fill="#10b981" font-size="6">Frontend</text>
                    
                    <!-- Row 2 -->
                    <rect x="0" y="135" width="148" height="125" rx="8" fill="#12121a" stroke="#f59e0b" stroke-width="1"/>
                    <rect x="8" y="143" width="132" height="52" rx="5" fill="#f59e0b" opacity="0.2"/>
                    <rect x="18" y="160" width="65" height="18" rx="3" fill="#f59e0b" opacity="0.4"/>
                    <rect x="8" y="203" width="78" height="9" rx="2" fill="#f8fafc"/>
                    <rect x="8" y="217" width="100" height="5" rx="1" fill="#64748b" opacity="0.4"/>
                    <rect x="8" y="235" width="38" height="14" rx="7" fill="#f59e0b" opacity="0.2"/>
                    <text x="15" y="245" fill="#f59e0b" font-size="6">Mobile</text>
                    
                    <rect x="158" y="135" width="148" height="125" rx="8" fill="#12121a" stroke="#ef4444" stroke-width="1"/>
                    <rect x="166" y="143" width="132" height="52" rx="5" fill="#ef4444" opacity="0.2"/>
                    <rect x="176" y="160" width="50" height="18" rx="3" fill="#ef4444" opacity="0.4"/>
                    <rect x="166" y="203" width="82" height="9" rx="2" fill="#f8fafc"/>
                    <rect x="166" y="217" width="110" height="5" rx="1" fill="#64748b" opacity="0.4"/>
                    <rect x="166" y="235" width="32" height="14" rx="7" fill="#ef4444" opacity="0.2"/>
                    <text x="172" y="245" fill="#ef4444" font-size="6">Data</text>
                    
                    <rect x="316" y="135" width="148" height="125" rx="8" fill="#12121a" stroke="#06b6d4" stroke-width="1"/>
                    <rect x="324" y="143" width="132" height="52" rx="5" fill="#06b6d4" opacity="0.2"/>
                    <rect x="334" y="160" width="60" height="18" rx="3" fill="#06b6d4" opacity="0.4"/>
                    <rect x="324" y="203" width="92" height="9" rx="2" fill="#f8fafc"/>
                    <rect x="324" y="217" width="115" height="5" rx="1" fill="#64748b" opacity="0.4"/>
                    <rect x="324" y="235" width="32" height="14" rx="7" fill="#06b6d4" opacity="0.2"/>
                    <text x="330" y="245" fill="#06b6d4" font-size="6">Infra</text>
                </g>
            </svg>
        `;
    }
}

/* ============================================
   Schema Diagram
   ============================================ */
function initSchemaDigram() {
    const schema = document.getElementById('schemaDiagram');
    if (!schema) return;

    schema.innerHTML = `
        <svg viewBox="0 0 900 300" width="100%" height="100%" style="background: #0a0a0f;">
            <!-- Features Table -->
            <g transform="translate(40, 25)">
                <rect x="0" y="0" width="175" height="250" rx="8" fill="#12121a" stroke="#6366f1" stroke-width="2"/>
                <rect x="0" y="0" width="175" height="32" rx="8" fill="#6366f1"/>
                <rect x="0" y="24" width="175" height="8" fill="#6366f1"/>
                <text x="12" y="21" fill="white" font-size="11" font-weight="600">Features</text>
                
                <text x="12" y="52" fill="#64748b" font-size="8">Feature ID</text>
                <text x="125" y="52" fill="#6366f1" font-size="7">Primary</text>
                
                <text x="12" y="75" fill="#64748b" font-size="8">Feature Name</text>
                <text x="125" y="75" fill="#94a3b8" font-size="7">Text</text>
                
                <text x="12" y="98" fill="#64748b" font-size="8">Description</text>
                <text x="125" y="98" fill="#94a3b8" font-size="7">Long text</text>
                
                <text x="12" y="121" fill="#64748b" font-size="8">Status</text>
                <text x="125" y="121" fill="#10b981" font-size="7">Select</text>
                
                <text x="12" y="144" fill="#64748b" font-size="8">Priority</text>
                <text x="125" y="144" fill="#ef4444" font-size="7">Select</text>
                
                <text x="12" y="167" fill="#64748b" font-size="8">Start Date</text>
                <text x="125" y="167" fill="#94a3b8" font-size="7">Date</text>
                
                <text x="12" y="190" fill="#64748b" font-size="8">End Date</text>
                <text x="125" y="190" fill="#94a3b8" font-size="7">Date</text>
                
                <text x="12" y="213" fill="#64748b" font-size="8">Team</text>
                <text x="125" y="213" fill="#8b5cf6" font-size="7">Link</text>
                
                <text x="12" y="236" fill="#64748b" font-size="8">Dependencies</text>
                <text x="125" y="236" fill="#10b981" font-size="7">Link</text>
            </g>
            
            <!-- Teams Table -->
            <g transform="translate(360, 25)">
                <rect x="0" y="0" width="175" height="160" rx="8" fill="#12121a" stroke="#8b5cf6" stroke-width="2"/>
                <rect x="0" y="0" width="175" height="32" rx="8" fill="#8b5cf6"/>
                <rect x="0" y="24" width="175" height="8" fill="#8b5cf6"/>
                <text x="12" y="21" fill="white" font-size="11" font-weight="600">Teams</text>
                
                <text x="12" y="52" fill="#64748b" font-size="8">Team ID</text>
                <text x="125" y="52" fill="#8b5cf6" font-size="7">Primary</text>
                
                <text x="12" y="75" fill="#64748b" font-size="8">Team Name</text>
                <text x="125" y="75" fill="#94a3b8" font-size="7">Text</text>
                
                <text x="12" y="98" fill="#64748b" font-size="8">Lead</text>
                <text x="125" y="98" fill="#f59e0b" font-size="7">Link</text>
                
                <text x="12" y="121" fill="#64748b" font-size="8">Members</text>
                <text x="125" y="121" fill="#f59e0b" font-size="7">Link</text>
                
                <text x="12" y="144" fill="#64748b" font-size="8">Features</text>
                <text x="125" y="144" fill="#6366f1" font-size="7">Link</text>
            </g>
            
            <!-- Dependencies Table -->
            <g transform="translate(360, 200)">
                <rect x="0" y="0" width="175" height="75" rx="8" fill="#12121a" stroke="#10b981" stroke-width="2"/>
                <rect x="0" y="0" width="175" height="32" rx="8" fill="#10b981"/>
                <rect x="0" y="24" width="175" height="8" fill="#10b981"/>
                <text x="12" y="21" fill="white" font-size="11" font-weight="600">Dependencies</text>
                
                <text x="12" y="52" fill="#64748b" font-size="8">Dependency</text>
                <text x="125" y="52" fill="#6366f1" font-size="7">Link</text>
                
                <text x="12" y="72" fill="#64748b" font-size="8">Dependent On</text>
                <text x="125" y="72" fill="#6366f1" font-size="7">Link</text>
            </g>
            
            <!-- People Table -->
            <g transform="translate(680, 25)">
                <rect x="0" y="0" width="175" height="135" rx="8" fill="#12121a" stroke="#f59e0b" stroke-width="2"/>
                <rect x="0" y="0" width="175" height="32" rx="8" fill="#f59e0b"/>
                <rect x="0" y="24" width="175" height="8" fill="#f59e0b"/>
                <text x="12" y="21" fill="white" font-size="11" font-weight="600">People</text>
                
                <text x="12" y="52" fill="#64748b" font-size="8">Person ID</text>
                <text x="125" y="52" fill="#f59e0b" font-size="7">Primary</text>
                
                <text x="12" y="75" fill="#64748b" font-size="8">Name</text>
                <text x="125" y="75" fill="#94a3b8" font-size="7">Text</text>
                
                <text x="12" y="98" fill="#64748b" font-size="8">Role</text>
                <text x="125" y="98" fill="#94a3b8" font-size="7">Select</text>
                
                <text x="12" y="121" fill="#64748b" font-size="8">Team</text>
                <text x="125" y="121" fill="#8b5cf6" font-size="7">Link</text>
            </g>
            
            <!-- Relationship Lines -->
            <line x1="215" y1="235" x2="360" y2="140" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="4"/>
            <circle cx="360" cy="140" r="5" fill="#8b5cf6"/>
            
            <line x1="215" y1="260" x2="360" y2="240" stroke="#10b981" stroke-width="2" stroke-dasharray="4"/>
            <circle cx="360" cy="240" r="5" fill="#10b981"/>
            
            <line x1="535" y1="95" x2="680" y2="95" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4"/>
            <circle cx="680" cy="95" r="5" fill="#f59e0b"/>
            
            <line x1="535" y1="118" x2="680" y2="118" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4"/>
            <circle cx="680" cy="118" r="5" fill="#f59e0b"/>
        </svg>
    `;
}

/* ============================================
   User Flow Diagram
   ============================================ */
function initUserFlowDiagram() {
    const userflow = document.getElementById('userflowDiagram');
    if (!userflow) return;

    userflow.innerHTML = `
        <svg viewBox="0 0 1000 300" width="100%" height="100%" style="background: #12121a;">
            <!-- Start -->
            <circle cx="60" cy="150" r="25" fill="#6366f1"/>
            <text x="60" y="155" fill="white" font-size="9" text-anchor="middle">Start</text>
            
            <!-- Arrow -->
            <line x1="85" y1="150" x2="135" y2="150" stroke="#64748b" stroke-width="2"/>
            <polygon points="135,145 145,150 135,155" fill="#64748b"/>
            
            <!-- Step 1 -->
            <rect x="150" y="120" width="120" height="60" rx="8" fill="#1a1a26" stroke="#ffd02f" stroke-width="2"/>
            <text x="210" y="145" fill="#ffd02f" font-size="8" text-anchor="middle">Miro</text>
            <text x="210" y="160" fill="#f8fafc" font-size="9" text-anchor="middle">User Research</text>
            
            <!-- Arrow -->
            <line x1="270" y1="150" x2="320" y2="150" stroke="#64748b" stroke-width="2"/>
            <polygon points="320,145 330,150 320,155" fill="#64748b"/>
            
            <!-- Step 2 -->
            <rect x="335" y="120" width="120" height="60" rx="8" fill="#1a1a26" stroke="#a259ff" stroke-width="2"/>
            <text x="395" y="145" fill="#a259ff" font-size="8" text-anchor="middle">Figma</text>
            <text x="395" y="160" fill="#f8fafc" font-size="9" text-anchor="middle">Lo-Fi Wireframes</text>
            
            <!-- Arrow -->
            <line x1="455" y1="150" x2="505" y2="150" stroke="#64748b" stroke-width="2"/>
            <polygon points="505,145 515,150 505,155" fill="#64748b"/>
            
            <!-- Step 3 -->
            <rect x="520" y="120" width="120" height="60" rx="8" fill="#1a1a26" stroke="#a259ff" stroke-width="2"/>
            <text x="580" y="145" fill="#a259ff" font-size="8" text-anchor="middle">Figma</text>
            <text x="580" y="160" fill="#f8fafc" font-size="9" text-anchor="middle">Mid-Fi Wireframes</text>
            
            <!-- Arrow -->
            <line x1="640" y1="150" x2="690" y2="150" stroke="#64748b" stroke-width="2"/>
            <polygon points="690,145 700,150 690,155" fill="#64748b"/>
            
            <!-- Step 4 -->
            <rect x="705" y="120" width="120" height="60" rx="8" fill="#1a1a26" stroke="#18bfff" stroke-width="2"/>
            <text x="765" y="145" fill="#18bfff" font-size="8" text-anchor="middle">Airtable</text>
            <text x="765" y="160" fill="#f8fafc" font-size="9" text-anchor="middle">Database Setup</text>
            
            <!-- Arrow -->
            <line x1="825" y1="150" x2="875" y2="150" stroke="#64748b" stroke-width="2"/>
            <polygon points="875,145 885,150 875,155" fill="#64748b"/>
            
            <!-- End -->
            <circle cx="920" cy="150" r="25" fill="#10b981"/>
            <text x="920" y="155" fill="white" font-size="9" text-anchor="middle">Done</text>
            
            <!-- Feedback loop -->
            <path d="M 580 180 L 580 230 L 210 230 L 210 180" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4"/>
            <polygon points="205,180 210,170 215,180" fill="#64748b"/>
            <text x="395" y="250" fill="#64748b" font-size="8" text-anchor="middle">Iterate based on feedback</text>
            
            <!-- Tool Legend -->
            <g transform="translate(40, 40)">
                <rect x="0" y="0" width="12" height="12" rx="2" fill="#ffd02f"/>
                <text x="20" y="10" fill="#64748b" font-size="8">Miro</text>
                <rect x="60" y="0" width="12" height="12" rx="2" fill="#a259ff"/>
                <text x="80" y="10" fill="#64748b" font-size="8">Figma</text>
                <rect x="120" y="0" width="12" height="12" rx="2" fill="#18bfff"/>
                <text x="140" y="10" fill="#64748b" font-size="8">Airtable</text>
            </g>
        </svg>
    `;
}

/* ============================================
   Design Artifacts
   ============================================ */
function initArtifacts() {
    // Annotations
    const annotations = document.getElementById('artifactAnnotations');
    if (annotations) {
        annotations.innerHTML = `
            <svg viewBox="0 0 200 150" width="100%" height="100%" style="background: #0a0a0f;">
                <rect x="15" y="15" width="170" height="120" rx="6" fill="#12121a"/>
                <rect x="25" y="25" width="80" height="8" rx="2" fill="#f8fafc"/>
                <rect x="25" y="40" width="150" height="5" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="25" y="50" width="130" height="5" rx="1" fill="#64748b" opacity="0.3"/>
                
                <!-- Annotation bubble -->
                <circle cx="150" cy="85" r="15" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="1"/>
                <text x="150" y="89" fill="#f59e0b" font-size="10" text-anchor="middle">1</text>
                <line x1="135" y1="85" x2="90" y2="85" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2"/>
                <rect x="25" y="75" width="65" height="20" rx="3" fill="#1a1a26"/>
                
                <rect x="25" y="105" width="100" height="5" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="25" y="115" width="80" height="5" rx="1" fill="#64748b" opacity="0.3"/>
            </svg>
        `;
    }
    
    // Screen Documentation
    const screenDoc = document.getElementById('artifactScreenDoc');
    if (screenDoc) {
        screenDoc.innerHTML = `
            <svg viewBox="0 0 200 150" width="100%" height="100%" style="background: #0a0a0f;">
                <rect x="15" y="15" width="110" height="120" rx="6" fill="#12121a"/>
                <rect x="22" y="22" width="96" height="15" rx="3" fill="#1a1a26"/>
                <rect x="22" y="42" width="96" height="40" rx="3" fill="#6366f1" opacity="0.2"/>
                <rect x="22" y="87" width="45" height="18" rx="3" fill="#1a1a26"/>
                <rect x="72" y="87" width="46" height="18" rx="3" fill="#1a1a26"/>
                <rect x="22" y="110" width="96" height="18" rx="3" fill="#1a1a26"/>
                
                <!-- Doc panel -->
                <rect x="135" y="15" width="50" height="120" rx="4" fill="#16161f"/>
                <rect x="142" y="22" width="36" height="5" rx="1" fill="#64748b"/>
                <rect x="142" y="32" width="36" height="3" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="142" y="38" width="30" height="3" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="142" y="50" width="36" height="5" rx="1" fill="#64748b"/>
                <rect x="142" y="60" width="36" height="3" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="142" y="66" width="28" height="3" rx="1" fill="#64748b" opacity="0.4"/>
            </svg>
        `;
    }
    
    // Dependency Mapping
    const dependency = document.getElementById('artifactDependency');
    if (dependency) {
        dependency.innerHTML = `
            <svg viewBox="0 0 200 150" width="100%" height="100%" style="background: #0a0a0f;">
                <!-- Nodes -->
                <rect x="20" y="20" width="50" height="30" rx="4" fill="#6366f1"/>
                <rect x="90" y="55" width="50" height="30" rx="4" fill="#8b5cf6"/>
                <rect x="130" y="100" width="50" height="30" rx="4" fill="#10b981"/>
                <rect x="30" y="100" width="50" height="30" rx="4" fill="#f59e0b"/>
                
                <!-- Connections -->
                <line x1="70" y1="35" x2="90" y2="70" stroke="#64748b" stroke-width="1.5"/>
                <line x1="45" y1="50" x2="55" y2="100" stroke="#64748b" stroke-width="1.5"/>
                <line x1="115" y1="85" x2="155" y2="100" stroke="#64748b" stroke-width="1.5"/>
                <line x1="115" y1="85" x2="55" y2="100" stroke="#64748b" stroke-width="1.5"/>
                
                <!-- Arrows -->
                <circle cx="90" cy="70" r="3" fill="#64748b"/>
                <circle cx="55" cy="100" r="3" fill="#64748b"/>
                <circle cx="155" cy="100" r="3" fill="#64748b"/>
            </svg>
        `;
    }
    
    // Roadmap View
    const roadmap = document.getElementById('artifactRoadmap');
    if (roadmap) {
        roadmap.innerHTML = `
            <svg viewBox="0 0 200 150" width="100%" height="100%" style="background: #0a0a0f;">
                <rect x="15" y="15" width="170" height="120" rx="6" fill="#12121a"/>
                
                <!-- Timeline bars -->
                <rect x="50" y="30" width="60" height="14" rx="3" fill="#6366f1"/>
                <rect x="70" y="50" width="80" height="14" rx="3" fill="#8b5cf6"/>
                <rect x="55" y="70" width="45" height="14" rx="3" fill="#10b981"/>
                <rect x="110" y="70" width="55" height="14" rx="3" fill="#10b981" opacity="0.6"/>
                <rect x="80" y="90" width="70" height="14" rx="3" fill="#f59e0b"/>
                <rect x="45" y="110" width="50" height="14" rx="3" fill="#ef4444"/>
                
                <!-- Labels -->
                <rect x="22" y="32" width="20" height="8" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="22" y="52" width="18" height="8" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="22" y="72" width="22" height="8" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="22" y="92" width="16" height="8" rx="1" fill="#64748b" opacity="0.4"/>
                <rect x="22" y="112" width="19" height="8" rx="1" fill="#64748b" opacity="0.4"/>
            </svg>
        `;
    }
}

/* ============================================
   Tool Deep Dive Visualizations
   ============================================ */
function initToolDeepDives() {
    initAirtableDeepDive();
    initFigmaDeepDive();
    initMiroDeepDive();
    initWireframingDeepDive();
}

function initAirtableDeepDive() {
    // Timeline Capability
    const timeline = document.getElementById('airtable-cap-timeline');
    if (timeline) {
        timeline.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="10" y="15" width="180" height="90" fill="#12121a" rx="4"/>
                <text x="20" y="30" fill="#64748b" font-size="6">Q1</text>
                <text x="60" y="30" fill="#64748b" font-size="6">Q2</text>
                <text x="100" y="30" fill="#64748b" font-size="6">Q3</text>
                <text x="140" y="30" fill="#64748b" font-size="6">Q4</text>
                <rect x="25" y="40" width="50" height="10" rx="2" fill="#18bfff"/>
                <rect x="55" y="55" width="60" height="10" rx="2" fill="#6366f1"/>
                <rect x="40" y="70" width="40" height="10" rx="2" fill="#10b981"/>
                <rect x="90" y="70" width="50" height="10" rx="2" fill="#10b981" opacity="0.6"/>
                <rect x="70" y="85" width="70" height="10" rx="2" fill="#f59e0b"/>
            </svg>
        `;
    }

    // Kanban Capability
    const kanban = document.getElementById('airtable-cap-kanban');
    if (kanban) {
        kanban.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="10" y="10" width="55" height="100" fill="#12121a" rx="4"/>
                <text x="20" y="25" fill="#64748b" font-size="6">Backlog</text>
                <rect x="15" y="32" width="45" height="18" rx="3" fill="#16161f" stroke="#64748b" stroke-width="0.5"/>
                <rect x="15" y="54" width="45" height="18" rx="3" fill="#16161f" stroke="#64748b" stroke-width="0.5"/>
                
                <rect x="72" y="10" width="55" height="100" fill="#12121a" rx="4"/>
                <text x="82" y="25" fill="#18bfff" font-size="6">Active</text>
                <rect x="77" y="32" width="45" height="18" rx="3" fill="#16161f" stroke="#18bfff" stroke-width="1"/>
                <rect x="77" y="54" width="45" height="18" rx="3" fill="#16161f" stroke="#18bfff" stroke-width="1"/>
                
                <rect x="134" y="10" width="55" height="100" fill="#12121a" rx="4"/>
                <text x="144" y="25" fill="#10b981" font-size="6">Done</text>
                <rect x="139" y="32" width="45" height="18" rx="3" fill="#16161f" stroke="#10b981" stroke-width="1"/>
                <rect x="139" y="54" width="45" height="18" rx="3" fill="#16161f" stroke="#10b981" stroke-width="1"/>
                <rect x="139" y="76" width="45" height="18" rx="3" fill="#16161f" stroke="#10b981" stroke-width="1"/>
            </svg>
        `;
    }

    // Linked Records Capability
    const linked = document.getElementById('airtable-cap-linked');
    if (linked) {
        linked.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="10" y="35" width="50" height="50" rx="6" fill="#12121a" stroke="#18bfff" stroke-width="1.5"/>
                <text x="22" y="62" fill="#18bfff" font-size="7">Features</text>
                
                <rect x="75" y="10" width="50" height="40" rx="6" fill="#12121a" stroke="#6366f1" stroke-width="1.5"/>
                <text x="88" y="35" fill="#6366f1" font-size="7">Teams</text>
                
                <rect x="75" y="70" width="50" height="40" rx="6" fill="#12121a" stroke="#10b981" stroke-width="1.5"/>
                <text x="85" y="95" fill="#10b981" font-size="7">People</text>
                
                <rect x="140" y="35" width="50" height="50" rx="6" fill="#12121a" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="155" y="62" fill="#f59e0b" font-size="7">Deps</text>
                
                <line x1="60" y1="50" x2="75" y2="30" stroke="#64748b" stroke-width="1"/>
                <line x1="60" y1="70" x2="75" y2="90" stroke="#64748b" stroke-width="1"/>
                <line x1="125" y1="60" x2="140" y2="60" stroke="#64748b" stroke-width="1"/>
            </svg>
        `;
    }

    // Formula Capability
    const formula = document.getElementById('airtable-cap-formula');
    if (formula) {
        formula.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="10" y="10" width="180" height="100" fill="#12121a" rx="4"/>
                <rect x="20" y="20" width="160" height="20" fill="#16161f" rx="3"/>
                <text x="30" y="34" fill="#18bfff" font-size="7" font-family="monospace">ROLLUP(Progress)</text>
                
                <rect x="20" y="50" width="75" height="50" fill="#16161f" rx="4"/>
                <text x="30" y="68" fill="#64748b" font-size="6">Progress</text>
                <rect x="30" y="78" width="55" height="8" fill="#0f0f17" rx="2"/>
                <rect x="30" y="78" width="40" height="8" fill="#10b981" rx="2"/>
                <text x="30" y="96" fill="#10b981" font-size="8">73%</text>
                
                <rect x="105" y="50" width="75" height="50" fill="#16161f" rx="4"/>
                <text x="115" y="68" fill="#64748b" font-size="6">Priority</text>
                <rect x="115" y="76" width="30" height="14" rx="7" fill="#ef4444" opacity="0.3"/>
                <text x="123" y="86" fill="#ef4444" font-size="6">High</text>
            </svg>
        `;
    }

    // Airtable Example 1
    const example1 = document.getElementById('airtable-example-1');
    if (example1) {
        example1.innerHTML = `
            <svg viewBox="0 0 400 220" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="10" y="10" width="380" height="200" fill="#12121a" rx="6"/>
                <rect x="15" y="15" width="80" height="18" rx="3" fill="#18bfff"/>
                <text x="25" y="28" fill="white" font-size="7">Timeline View</text>
                
                <text x="100" y="45" fill="#64748b" font-size="7">Q1 2025</text>
                <text x="180" y="45" fill="#64748b" font-size="7">Q2 2025</text>
                <text x="260" y="45" fill="#64748b" font-size="7">Q3 2025</text>
                <text x="340" y="45" fill="#64748b" font-size="7">Q4</text>
                
                <text x="25" y="70" fill="#94a3b8" font-size="6">Admissions</text>
                <rect x="100" y="58" width="100" height="16" rx="3" fill="#ef4444"/>
                
                <text x="25" y="95" fill="#94a3b8" font-size="6">Care Coord</text>
                <rect x="150" y="83" width="120" height="16" rx="3" fill="#6366f1"/>
                
                <text x="25" y="120" fill="#94a3b8" font-size="6">Discharge</text>
                <rect x="120" y="108" width="80" height="16" rx="3" fill="#10b981"/>
                <rect x="220" y="108" width="90" height="16" rx="3" fill="#10b981" opacity="0.6"/>
                
                <text x="25" y="145" fill="#94a3b8" font-size="6">Reporting</text>
                <rect x="180" y="133" width="130" height="16" rx="3" fill="#f59e0b"/>
                
                <text x="25" y="170" fill="#94a3b8" font-size="6">Mobile App</text>
                <rect x="260" y="158" width="100" height="16" rx="3" fill="#8b5cf6"/>
                
                <rect x="25" y="185" width="120" height="18" fill="#16161f" rx="3"/>
                <text x="35" y="197" fill="#64748b" font-size="6">150 Features · 8 Modules</text>
            </svg>
        `;
    }

    // Airtable Example 2
    const example2 = document.getElementById('airtable-example-2');
    if (example2) {
        example2.innerHTML = `
            <svg viewBox="0 0 400 220" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="10" y="10" width="380" height="200" fill="#12121a" rx="6"/>
                <rect x="15" y="15" width="100" height="18" rx="3" fill="#18bfff"/>
                <text x="25" y="28" fill="white" font-size="7">Compliance Tracker</text>
                
                <rect x="20" y="45" width="360" height="20" fill="#16161f" rx="3"/>
                <text x="35" y="58" fill="#64748b" font-size="6">Requirement</text>
                <text x="150" y="58" fill="#64748b" font-size="6">Status</text>
                <text x="250" y="58" fill="#64748b" font-size="6">Features Linked</text>
                
                <rect x="20" y="70" width="360" height="25" fill="#16161f" rx="3"/>
                <text x="35" y="87" fill="#f8fafc" font-size="7">SOX Compliance</text>
                <rect x="150" y="77" width="40" height="12" rx="6" fill="#10b981" opacity="0.3"/>
                <text x="160" y="87" fill="#10b981" font-size="6">Done</text>
                <text x="250" y="87" fill="#6366f1" font-size="7">12 linked</text>
                
                <rect x="20" y="100" width="360" height="25" fill="#16161f" rx="3"/>
                <text x="35" y="117" fill="#f8fafc" font-size="7">FDIC Requirements</text>
                <rect x="150" y="107" width="55" height="12" rx="6" fill="#f59e0b" opacity="0.3"/>
                <text x="157" y="117" fill="#f59e0b" font-size="6">In Progress</text>
                <text x="250" y="117" fill="#6366f1" font-size="7">8 linked</text>
                
                <rect x="20" y="130" width="360" height="25" fill="#16161f" rx="3"/>
                <text x="35" y="147" fill="#f8fafc" font-size="7">BSA/AML</text>
                <rect x="150" y="137" width="40" height="12" rx="6" fill="#10b981" opacity="0.3"/>
                <text x="160" y="147" fill="#10b981" font-size="6">Done</text>
                <text x="250" y="147" fill="#6366f1" font-size="7">15 linked</text>
                
                <rect x="20" y="165" width="360" height="35" fill="#6366f1" opacity="0.1" rx="3"/>
                <text x="35" y="187" fill="#6366f1" font-size="8">35 total linked records · 100% Audit Pass</text>
            </svg>
        `;
    }
}

function initFigmaDeepDive() {
    // Lo-Fi Capability
    const lofi = document.getElementById('figma-cap-lofi');
    if (lofi) {
        lofi.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #1e1e2a;">
                <rect x="10" y="10" width="180" height="100" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="4"/>
                <rect x="20" y="20" width="50" height="10" fill="#64748b" opacity="0.4"/>
                <rect x="20" y="35" width="160" height="25" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
                <rect x="20" y="65" width="75" height="35" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
                <rect x="105" y="65" width="75" height="35" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
                <circle cx="175" cy="25" r="8" fill="none" stroke="#a259ff" stroke-width="1"/>
                <text x="175" y="28" fill="#a259ff" font-size="6" text-anchor="middle">?</text>
            </svg>
        `;
    }

    // Mid-Fi Capability
    const midfi = document.getElementById('figma-cap-midfi');
    if (midfi) {
        midfi.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #12121a;">
                <rect x="10" y="10" width="180" height="100" fill="#16161f" rx="4"/>
                <rect x="18" y="18" width="60" height="12" fill="#f8fafc" rx="2"/>
                <rect x="18" y="38" width="164" height="30" fill="#1a1a26" rx="3"/>
                <rect x="25" y="45" width="80" height="6" fill="#64748b" opacity="0.4"/>
                <rect x="25" y="55" width="60" height="6" fill="#64748b" opacity="0.3"/>
                <rect x="18" y="75" width="78" height="28" fill="#1a1a26" rx="3"/>
                <rect x="104" y="75" width="78" height="28" fill="#a259ff" opacity="0.2" rx="3"/>
            </svg>
        `;
    }

    // Hi-Fi Capability
    const hifi = document.getElementById('figma-cap-hifi');
    if (hifi) {
        hifi.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #0a0a0f;">
                <rect x="10" y="10" width="180" height="100" fill="#12121a" rx="6"/>
                <rect x="15" y="15" width="60" height="16" rx="3" fill="#a259ff"/>
                <text x="25" y="27" fill="white" font-size="7">Dashboard</text>
                <rect x="155" y="17" width="30" height="12" rx="6" fill="#10b981"/>
                <rect x="18" y="38" width="174" height="65" fill="#16161f" rx="4"/>
                <rect x="25" y="45" width="50" height="50" fill="#a259ff" opacity="0.2" rx="4"/>
                <rect x="82" y="45" width="50" height="50" fill="#10b981" opacity="0.2" rx="4"/>
                <rect x="139" y="45" width="46" height="50" fill="#f59e0b" opacity="0.2" rx="4"/>
            </svg>
        `;
    }

    // Annotations Capability
    const annotations = document.getElementById('figma-cap-annotations');
    if (annotations) {
        annotations.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="10" y="10" width="120" height="100" fill="#12121a" rx="4"/>
                <rect x="18" y="18" width="80" height="12" fill="#16161f" rx="2"/>
                <rect x="18" y="35" width="100" height="30" fill="#16161f" rx="3"/>
                <rect x="18" y="70" width="45" height="15" fill="#a259ff" opacity="0.3" rx="3"/>
                <rect x="68" y="70" width="45" height="15" fill="#16161f" rx="3"/>
                
                <circle cx="155" cy="35" r="12" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="1"/>
                <text x="155" y="39" fill="#f59e0b" font-size="9" text-anchor="middle">1</text>
                <line x1="143" y1="35" x2="118" y2="28" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2"/>
                
                <circle cx="170" cy="70" r="12" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="1"/>
                <text x="170" y="74" fill="#f59e0b" font-size="9" text-anchor="middle">2</text>
                <line x1="158" y1="70" x2="118" y2="50" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2"/>
            </svg>
        `;
    }

    // Figma Example 1
    const example1 = document.getElementById('figma-example-1');
    if (example1) {
        example1.innerHTML = `
            <svg viewBox="0 0 400 220" width="100%" height="100%" style="background: #0a0a0f;">
                <rect x="10" y="10" width="380" height="200" fill="#12121a" rx="6"/>
                
                <!-- Control Room Dashboard -->
                <rect x="20" y="20" width="180" height="90" fill="#16161f" rx="4"/>
                <text x="30" y="38" fill="#06b6d4" font-size="8">Production Line 1</text>
                <rect x="30" y="48" width="150" height="8" fill="#10b981" rx="2"/>
                <text x="30" y="75" fill="#f8fafc" font-size="14">94.2%</text>
                <text x="85" y="75" fill="#64748b" font-size="8">OEE</text>
                
                <rect x="210" y="20" width="170" height="90" fill="#16161f" rx="4"/>
                <text x="220" y="38" fill="#06b6d4" font-size="8">Production Line 2</text>
                <rect x="220" y="48" width="100" height="8" fill="#f59e0b" rx="2"/>
                <text x="220" y="75" fill="#f8fafc" font-size="14">78.5%</text>
                <text x="275" y="75" fill="#64748b" font-size="8">OEE</text>
                
                <rect x="20" y="120" width="360" height="80" fill="#16161f" rx="4"/>
                <text x="30" y="140" fill="#64748b" font-size="7">Timeline - 24 Hour View</text>
                <rect x="30" y="150" width="60" height="12" fill="#10b981" rx="2"/>
                <rect x="95" y="150" width="80" height="12" fill="#6366f1" rx="2"/>
                <rect x="180" y="150" width="40" height="12" fill="#f59e0b" rx="2"/>
                <rect x="225" y="150" width="60" height="12" fill="#ef4444" rx="2"/>
                <rect x="30" y="170" width="90" height="12" fill="#8b5cf6" rx="2"/>
                <rect x="125" y="170" width="70" height="12" fill="#06b6d4" rx="2"/>
            </svg>
        `;
    }

    // Figma Example 2
    const example2 = document.getElementById('figma-example-2');
    if (example2) {
        example2.innerHTML = `
            <svg viewBox="0 0 400 220" width="100%" height="100%" style="background: #0a0a0f;">
                <rect x="10" y="10" width="380" height="200" fill="#12121a" rx="6"/>
                
                <!-- Seller Portal -->
                <rect x="20" y="20" width="360" height="35" fill="#16161f" rx="4"/>
                <rect x="30" y="28" width="70" height="18" fill="#10b981" opacity="0.2" rx="3"/>
                <text x="42" y="41" fill="#10b981" font-size="8">Seller Hub</text>
                <circle cx="350" cy="37" r="12" fill="#a259ff"/>
                
                <rect x="20" y="65" width="115" height="60" fill="#16161f" rx="4"/>
                <text x="30" y="85" fill="#f8fafc" font-size="12">$45.2K</text>
                <text x="30" y="100" fill="#64748b" font-size="7">This Month</text>
                <rect x="30" y="108" width="90" height="6" fill="#10b981" rx="2"/>
                
                <rect x="145" y="65" width="115" height="60" fill="#16161f" rx="4"/>
                <text x="155" y="85" fill="#10b981" font-size="12">847</text>
                <text x="155" y="100" fill="#64748b" font-size="7">Orders</text>
                
                <rect x="270" y="65" width="110" height="60" fill="#16161f" rx="4"/>
                <text x="280" y="85" fill="#f59e0b" font-size="12">4.8 ★</text>
                <text x="280" y="100" fill="#64748b" font-size="7">Rating</text>
                
                <rect x="20" y="135" width="360" height="65" fill="#16161f" rx="4"/>
                <text x="30" y="155" fill="#f8fafc" font-size="8">Recent Orders</text>
                <rect x="30" y="165" width="340" height="25" fill="#0f0f17" rx="3"/>
            </svg>
        `;
    }
}

function initMiroDeepDive() {
    // Journey Mapping Capability
    const journey = document.getElementById('miro-cap-journey');
    if (journey) {
        journey.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #12121a;">
                <rect x="10" y="10" width="180" height="100" fill="#16161f" rx="4"/>
                
                <circle cx="35" cy="50" r="12" fill="#ffd02f" opacity="0.3" stroke="#ffd02f" stroke-width="1"/>
                <text x="35" y="54" fill="#ffd02f" font-size="7" text-anchor="middle">1</text>
                
                <line x1="47" y1="50" x2="65" y2="50" stroke="#64748b" stroke-width="1"/>
                
                <circle cx="80" cy="50" r="12" fill="#ffd02f" opacity="0.3" stroke="#ffd02f" stroke-width="1"/>
                <text x="80" y="54" fill="#ffd02f" font-size="7" text-anchor="middle">2</text>
                
                <line x1="92" y1="50" x2="110" y2="50" stroke="#64748b" stroke-width="1"/>
                
                <circle cx="125" cy="50" r="12" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="1"/>
                <text x="125" y="54" fill="#ef4444" font-size="7" text-anchor="middle">3</text>
                
                <line x1="137" y1="50" x2="155" y2="50" stroke="#64748b" stroke-width="1"/>
                
                <circle cx="170" cy="50" r="12" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="1"/>
                <text x="170" y="54" fill="#10b981" font-size="7" text-anchor="middle">4</text>
                
                <text x="35" y="80" fill="#64748b" font-size="5" text-anchor="middle">Aware</text>
                <text x="80" y="80" fill="#64748b" font-size="5" text-anchor="middle">Consider</text>
                <text x="125" y="80" fill="#64748b" font-size="5" text-anchor="middle">Pain</text>
                <text x="170" y="80" fill="#64748b" font-size="5" text-anchor="middle">Resolve</text>
            </svg>
        `;
    }

    // Affinity Mapping
    const affinity = document.getElementById('miro-cap-affinity');
    if (affinity) {
        affinity.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #12121a;">
                <rect x="10" y="10" width="180" height="100" fill="#16161f" rx="4"/>
                
                <rect x="20" y="20" width="25" height="20" rx="2" fill="#ffd02f" opacity="0.6"/>
                <rect x="50" y="20" width="25" height="20" rx="2" fill="#ffd02f" opacity="0.6"/>
                <rect x="80" y="20" width="25" height="20" rx="2" fill="#ffd02f" opacity="0.6"/>
                
                <rect x="115" y="20" width="25" height="20" rx="2" fill="#ff6b6b" opacity="0.6"/>
                <rect x="145" y="20" width="25" height="20" rx="2" fill="#ff6b6b" opacity="0.6"/>
                
                <rect x="20" y="50" width="25" height="20" rx="2" fill="#4ecdc4" opacity="0.6"/>
                <rect x="50" y="50" width="25" height="20" rx="2" fill="#4ecdc4" opacity="0.6"/>
                <rect x="80" y="50" width="25" height="20" rx="2" fill="#4ecdc4" opacity="0.6"/>
                <rect x="110" y="50" width="25" height="20" rx="2" fill="#4ecdc4" opacity="0.6"/>
                
                <rect x="20" y="80" width="25" height="20" rx="2" fill="#a78bfa" opacity="0.6"/>
                <rect x="50" y="80" width="25" height="20" rx="2" fill="#a78bfa" opacity="0.6"/>
            </svg>
        `;
    }

    // Workshop Facilitation
    const workshop = document.getElementById('miro-cap-workshop');
    if (workshop) {
        workshop.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #12121a;">
                <rect x="10" y="10" width="180" height="100" fill="#16161f" rx="4"/>
                
                <circle cx="60" cy="45" r="15" fill="#ffd02f" opacity="0.2" stroke="#ffd02f" stroke-width="1"/>
                <circle cx="100" cy="45" r="15" fill="#ffd02f" opacity="0.2" stroke="#ffd02f" stroke-width="1"/>
                <circle cx="140" cy="45" r="15" fill="#ffd02f" opacity="0.2" stroke="#ffd02f" stroke-width="1"/>
                
                <circle cx="80" cy="80" r="15" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="1"/>
                <circle cx="120" cy="80" r="15" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="1"/>
                
                <line x1="60" y1="60" x2="80" y2="65" stroke="#64748b" stroke-width="1" stroke-dasharray="2"/>
                <line x1="100" y1="60" x2="100" y2="65" stroke="#64748b" stroke-width="1" stroke-dasharray="2"/>
                <line x1="140" y1="60" x2="120" y2="65" stroke="#64748b" stroke-width="1" stroke-dasharray="2"/>
            </svg>
        `;
    }

    // Process Flow
    const flow = document.getElementById('miro-cap-flow');
    if (flow) {
        flow.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #12121a;">
                <rect x="10" y="10" width="180" height="100" fill="#16161f" rx="4"/>
                
                <rect x="20" y="30" width="40" height="25" rx="3" fill="#ffd02f" opacity="0.3" stroke="#ffd02f" stroke-width="1"/>
                <text x="40" y="46" fill="#ffd02f" font-size="6" text-anchor="middle">Start</text>
                
                <line x1="60" y1="42" x2="75" y2="42" stroke="#64748b" stroke-width="1"/>
                
                <polygon points="95,30 110,42 95,55 80,42" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1"/>
                <text x="95" y="45" fill="#6366f1" font-size="5" text-anchor="middle">?</text>
                
                <line x1="110" y1="42" x2="125" y2="42" stroke="#64748b" stroke-width="1"/>
                
                <rect x="125" y="30" width="40" height="25" rx="3" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="1"/>
                <text x="145" y="46" fill="#10b981" font-size="6" text-anchor="middle">Yes</text>
                
                <line x1="95" y1="55" x2="95" y2="75" stroke="#64748b" stroke-width="1"/>
                
                <rect x="75" y="75" width="40" height="25" rx="3" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="1"/>
                <text x="95" y="91" fill="#ef4444" font-size="6" text-anchor="middle">No</text>
            </svg>
        `;
    }

    // Miro Example 1
    const example1 = document.getElementById('miro-example-1');
    if (example1) {
        example1.innerHTML = `
            <svg viewBox="0 0 400 220" width="100%" height="100%" style="background: #12121a;">
                <rect x="10" y="10" width="380" height="200" fill="#16161f" rx="6"/>
                
                <text x="25" y="35" fill="#ffd02f" font-size="10" font-weight="500">Patient Admission Journey</text>
                
                <circle cx="50" cy="80" r="18" fill="#ffd02f" opacity="0.3" stroke="#ffd02f" stroke-width="1.5"/>
                <text x="50" y="85" fill="#ffd02f" font-size="8" text-anchor="middle">Arrive</text>
                
                <line x1="68" y1="80" x2="95" y2="80" stroke="#64748b" stroke-width="1.5"/>
                
                <circle cx="115" cy="80" r="18" fill="#ffd02f" opacity="0.3" stroke="#ffd02f" stroke-width="1.5"/>
                <text x="115" y="85" fill="#ffd02f" font-size="8" text-anchor="middle">Triage</text>
                
                <line x1="133" y1="80" x2="160" y2="80" stroke="#64748b" stroke-width="1.5"/>
                
                <circle cx="180" cy="80" r="18" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="1.5"/>
                <text x="180" y="85" fill="#ef4444" font-size="8" text-anchor="middle">Wait</text>
                
                <line x1="198" y1="80" x2="225" y2="80" stroke="#64748b" stroke-width="1.5"/>
                
                <circle cx="245" cy="80" r="18" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
                <text x="245" y="85" fill="#6366f1" font-size="8" text-anchor="middle">Admit</text>
                
                <line x1="263" y1="80" x2="290" y2="80" stroke="#64748b" stroke-width="1.5"/>
                
                <circle cx="310" cy="80" r="18" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="1.5"/>
                <text x="310" y="85" fill="#10b981" font-size="8" text-anchor="middle">Care</text>
                
                <line x1="328" y1="80" x2="355" y2="80" stroke="#64748b" stroke-width="1.5"/>
                
                <circle cx="370" cy="80" r="18" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="1.5"/>
                <text x="370" y="78" fill="#10b981" font-size="6" text-anchor="middle">Dis-</text>
                <text x="370" y="87" fill="#10b981" font-size="6" text-anchor="middle">charge</text>
                
                <rect x="165" y="115" width="50" height="25" rx="4" fill="#ef4444" opacity="0.2"/>
                <text x="190" y="125" fill="#ef4444" font-size="6" text-anchor="middle">Pain Point</text>
                <text x="190" y="135" fill="#ef4444" font-size="5" text-anchor="middle">45 min delay</text>
                
                <rect x="25" y="165" width="360" height="35" fill="#0f0f17" rx="4"/>
                <text x="40" y="185" fill="#64748b" font-size="8">12 Pain Points Identified · 8 Improvement Opportunities</text>
            </svg>
        `;
    }

    // Miro Example 2
    const example2 = document.getElementById('miro-example-2');
    if (example2) {
        example2.innerHTML = `
            <svg viewBox="0 0 400 220" width="100%" height="100%" style="background: #12121a;">
                <rect x="10" y="10" width="380" height="200" fill="#16161f" rx="6"/>
                
                <text x="25" y="35" fill="#ffd02f" font-size="10" font-weight="500">Affinity Mapping - Store Associate Discovery</text>
                
                <!-- Cluster 1 -->
                <rect x="25" y="50" width="85" height="80" rx="4" fill="#0f0f17" stroke="#ffd02f" stroke-width="1"/>
                <text x="35" y="68" fill="#ffd02f" font-size="7">Inventory Issues</text>
                <rect x="32" y="78" width="30" height="15" rx="2" fill="#ffd02f" opacity="0.4"/>
                <rect x="67" y="78" width="30" height="15" rx="2" fill="#ffd02f" opacity="0.4"/>
                <rect x="32" y="98" width="30" height="15" rx="2" fill="#ffd02f" opacity="0.4"/>
                <rect x="67" y="98" width="30" height="15" rx="2" fill="#ffd02f" opacity="0.4"/>
                
                <!-- Cluster 2 -->
                <rect x="120" y="50" width="85" height="80" rx="4" fill="#0f0f17" stroke="#ff6b6b" stroke-width="1"/>
                <text x="130" y="68" fill="#ff6b6b" font-size="7">Training Gaps</text>
                <rect x="127" y="78" width="30" height="15" rx="2" fill="#ff6b6b" opacity="0.4"/>
                <rect x="162" y="78" width="30" height="15" rx="2" fill="#ff6b6b" opacity="0.4"/>
                <rect x="127" y="98" width="30" height="15" rx="2" fill="#ff6b6b" opacity="0.4"/>
                
                <!-- Cluster 3 -->
                <rect x="215" y="50" width="85" height="80" rx="4" fill="#0f0f17" stroke="#4ecdc4" stroke-width="1"/>
                <text x="225" y="68" fill="#4ecdc4" font-size="7">System Speed</text>
                <rect x="222" y="78" width="30" height="15" rx="2" fill="#4ecdc4" opacity="0.4"/>
                <rect x="257" y="78" width="30" height="15" rx="2" fill="#4ecdc4" opacity="0.4"/>
                <rect x="222" y="98" width="30" height="15" rx="2" fill="#4ecdc4" opacity="0.4"/>
                <rect x="257" y="98" width="30" height="15" rx="2" fill="#4ecdc4" opacity="0.4"/>
                
                <!-- Cluster 4 -->
                <rect x="310" y="50" width="70" height="80" rx="4" fill="#0f0f17" stroke="#a78bfa" stroke-width="1"/>
                <text x="320" y="68" fill="#a78bfa" font-size="7">Mobile</text>
                <rect x="317" y="78" width="25" height="15" rx="2" fill="#a78bfa" opacity="0.4"/>
                <rect x="347" y="78" width="25" height="15" rx="2" fill="#a78bfa" opacity="0.4"/>
                
                <rect x="25" y="145" width="355" height="55" fill="#0f0f17" rx="4"/>
                <text x="40" y="170" fill="#64748b" font-size="8">30+ Store Managers · 200+ Insights · 15 Actionable Themes</text>
                <text x="40" y="188" fill="#10b981" font-size="7">Direct input into product roadmap prioritization</text>
            </svg>
        `;
    }
}

function initWireframingDeepDive() {
    // Lo-Fi Wireframe
    const lofi = document.getElementById('wireframe-lofi');
    if (lofi) {
        lofi.innerHTML = `
            <svg viewBox="0 0 250 200" width="100%" height="100%" style="background: #1e1e2a;">
                <rect x="10" y="10" width="230" height="180" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="4"/>
                
                <rect x="20" y="20" width="80" height="15" fill="#64748b" opacity="0.4"/>
                <rect x="180" y="22" width="50" height="10" fill="#64748b" opacity="0.3"/>
                
                <rect x="20" y="45" width="210" height="40" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
                <rect x="30" y="55" width="100" height="8" fill="#64748b" opacity="0.3"/>
                <rect x="30" y="68" width="70" height="8" fill="#64748b" opacity="0.2"/>
                
                <rect x="20" y="95" width="100" height="85" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
                <rect x="130" y="95" width="100" height="85" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
                
                <circle cx="220" cy="55" r="10" fill="none" stroke="#6366f1" stroke-width="1"/>
                <text x="220" y="58" fill="#6366f1" font-size="8" text-anchor="middle">?</text>
            </svg>
        `;
    }

    // Mid-Fi Wireframe
    const midfi = document.getElementById('wireframe-midfi');
    if (midfi) {
        midfi.innerHTML = `
            <svg viewBox="0 0 250 200" width="100%" height="100%" style="background: #12121a;">
                <rect x="10" y="10" width="230" height="180" fill="#16161f" rx="6"/>
                
                <rect x="18" y="18" width="90" height="18" rx="3" fill="#f8fafc"/>
                <rect x="195" y="20" width="35" height="14" rx="7" fill="#6366f1"/>
                
                <rect x="18" y="45" width="214" height="45" fill="#1a1a26" rx="4"/>
                <rect x="28" y="55" width="120" height="10" rx="2" fill="#64748b" opacity="0.4"/>
                <rect x="28" y="72" width="80" height="8" rx="2" fill="#64748b" opacity="0.3"/>
                
                <rect x="18" y="100" width="103" height="80" fill="#1a1a26" rx="4"/>
                <rect x="28" y="110" width="60" height="8" rx="2" fill="#64748b" opacity="0.4"/>
                <rect x="28" y="125" width="80" height="40" fill="#0f0f17" rx="3"/>
                
                <rect x="129" y="100" width="103" height="80" fill="#6366f1" opacity="0.15" rx="4"/>
                <rect x="139" y="110" width="70" height="8" rx="2" fill="#6366f1"/>
            </svg>
        `;
    }

    // Hi-Fi Wireframe
    const hifi = document.getElementById('wireframe-hifi');
    if (hifi) {
        hifi.innerHTML = `
            <svg viewBox="0 0 250 200" width="100%" height="100%" style="background: #0a0a0f;">
                <rect x="10" y="10" width="230" height="180" fill="#12121a" rx="8"/>
                
                <rect x="15" y="15" width="65" height="18" rx="4" fill="#6366f1"/>
                <text x="28" y="28" fill="white" font-size="8">Dashboard</text>
                <rect x="200" y="17" width="35" height="14" rx="7" fill="#10b981"/>
                
                <rect x="18" y="42" width="214" height="50" fill="#16161f" rx="5"/>
                <rect x="28" y="52" width="50" height="30" rx="4" fill="#6366f1" opacity="0.2"/>
                <rect x="88" y="52" width="50" height="30" rx="4" fill="#10b981" opacity="0.2"/>
                <rect x="148" y="52" width="50" height="30" rx="4" fill="#f59e0b" opacity="0.2"/>
                
                <rect x="18" y="100" width="214" height="82" fill="#16161f" rx="5"/>
                <rect x="28" y="110" width="80" height="10" rx="2" fill="#f8fafc"/>
                <rect x="28" y="128" width="194" height="45" fill="#0f0f17" rx="4"/>
                <rect x="38" y="138" width="60" height="8" rx="2" fill="#6366f1"/>
                <rect x="38" y="152" width="80" height="6" rx="2" fill="#64748b" opacity="0.4"/>
                <rect x="38" y="162" width="50" height="6" rx="2" fill="#64748b" opacity="0.3"/>
            </svg>
        `;
    }

    // Screen Layout Capability
    const screen = document.getElementById('wire-cap-screen');
    if (screen) {
        screen.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="20" y="10" width="160" height="100" fill="#12121a" rx="4" stroke="#6366f1" stroke-width="1"/>
                <rect x="28" y="18" width="144" height="20" fill="#16161f" rx="3"/>
                <rect x="28" y="45" width="68" height="55" fill="#16161f" rx="3"/>
                <rect x="104" y="45" width="68" height="55" fill="#16161f" rx="3"/>
            </svg>
        `;
    }

    // States Capability
    const states = document.getElementById('wire-cap-states');
    if (states) {
        states.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="15" y="30" width="50" height="25" rx="4" fill="#6366f1"/>
                <text x="40" y="46" fill="white" font-size="7" text-anchor="middle">Default</text>
                
                <rect x="75" y="30" width="50" height="25" rx="4" fill="#8b5cf6"/>
                <text x="100" y="46" fill="white" font-size="7" text-anchor="middle">Hover</text>
                
                <rect x="135" y="30" width="50" height="25" rx="4" fill="#a78bfa"/>
                <text x="160" y="46" fill="white" font-size="7" text-anchor="middle">Active</text>
                
                <rect x="15" y="70" width="50" height="25" rx="4" fill="#64748b" opacity="0.5"/>
                <text x="40" y="86" fill="#64748b" font-size="7" text-anchor="middle">Disabled</text>
                
                <rect x="75" y="70" width="50" height="25" rx="4" fill="#ef4444"/>
                <text x="100" y="86" fill="white" font-size="7" text-anchor="middle">Error</text>
                
                <rect x="135" y="70" width="50" height="25" rx="4" fill="#10b981"/>
                <text x="160" y="86" fill="white" font-size="7" text-anchor="middle">Success</text>
            </svg>
        `;
    }

    // Documentation Capability
    const doc = document.getElementById('wire-cap-doc');
    if (doc) {
        doc.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="10" y="10" width="180" height="100" fill="#12121a" rx="4"/>
                <rect x="18" y="18" width="60" height="8" fill="#f8fafc" rx="2"/>
                <rect x="18" y="32" width="155" height="4" fill="#64748b" opacity="0.4"/>
                <rect x="18" y="40" width="130" height="4" fill="#64748b" opacity="0.4"/>
                <rect x="18" y="48" width="145" height="4" fill="#64748b" opacity="0.4"/>
                
                <rect x="18" y="60" width="75" height="40" fill="#16161f" rx="3"/>
                <rect x="100" y="60" width="75" height="40" fill="#16161f" rx="3"/>
            </svg>
        `;
    }

    // Handoff Capability
    const handoff = document.getElementById('wire-cap-handoff');
    if (handoff) {
        handoff.innerHTML = `
            <svg viewBox="0 0 200 120" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="10" y="20" width="80" height="80" fill="#12121a" rx="4" stroke="#a259ff" stroke-width="1"/>
                <text x="50" y="50" fill="#a259ff" font-size="8" text-anchor="middle">Design</text>
                <rect x="25" y="60" width="50" height="25" fill="#16161f" rx="3"/>
                
                <line x1="95" y1="60" x2="105" y2="60" stroke="#64748b" stroke-width="2"/>
                <polygon points="105,55 115,60 105,65" fill="#64748b"/>
                
                <rect x="120" y="20" width="70" height="80" fill="#12121a" rx="4" stroke="#10b981" stroke-width="1"/>
                <text x="155" y="50" fill="#10b981" font-size="8" text-anchor="middle">Dev</text>
                <rect x="130" y="60" width="50" height="25" fill="#16161f" rx="3"/>
            </svg>
        `;
    }
}

/* ============================================
   Project Artifacts Visualizations
   ============================================ */
function initProjectArtifacts() {
    // Healthcare Project Artifacts
    initHealthcareArtifacts();
    initRetailArtifacts();
    initManufacturingArtifacts();
    initEcommerceArtifacts();
    initBankingArtifacts();
}

function initHealthcareArtifacts() {
    // Healthcare Wireframe
    const wireframe = document.getElementById('healthcare-wireframe');
    if (wireframe) {
        wireframe.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="50" height="130" fill="#12121a" rx="4"/>
                <rect x="10" y="12" width="40" height="6" fill="#6366f1" opacity="0.4"/>
                <rect x="10" y="25" width="35" height="4" fill="#64748b" opacity="0.3"/>
                <rect x="10" y="33" width="38" height="4" fill="#64748b" opacity="0.3"/>
                <rect x="10" y="45" width="40" height="20" fill="#ef4444" opacity="0.2" rx="3"/>
                <rect x="10" y="70" width="40" height="20" fill="#10b981" opacity="0.2" rx="3"/>
                
                <rect x="60" y="5" width="135" height="45" fill="#12121a" rx="4"/>
                <rect x="68" y="12" width="60" height="8" fill="#f8fafc" rx="2"/>
                <rect x="68" y="26" width="115" height="4" fill="#64748b" opacity="0.3"/>
                <rect x="68" y="34" width="90" height="4" fill="#64748b" opacity="0.3"/>
                
                <rect x="60" y="55" width="65" height="80" fill="#12121a" rx="4"/>
                <rect x="68" y="62" width="50" height="6" fill="#64748b" rx="1"/>
                <rect x="68" y="75" width="45" height="25" fill="#6366f1" opacity="0.2" rx="3"/>
                <rect x="68" y="108" width="45" height="20" fill="#8b5cf6" opacity="0.2" rx="3"/>
                
                <rect x="130" y="55" width="65" height="80" fill="#12121a" rx="4"/>
                <rect x="138" y="62" width="50" height="6" fill="#64748b" rx="1"/>
                <rect x="138" y="75" width="45" height="50" fill="#10b981" opacity="0.15" rx="3"/>
            </svg>
        `;
    }

    // Healthcare Airtable
    const airtable = document.getElementById('healthcare-airtable');
    if (airtable) {
        airtable.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="20" fill="#18bfff" opacity="0.2" rx="4"/>
                <text x="12" y="18" fill="#18bfff" font-size="7" font-weight="500">Timeline View - Clinical Modules</text>
                
                <rect x="5" y="30" width="190" height="105" fill="#12121a" rx="4"/>
                <text x="12" y="45" fill="#64748b" font-size="6">Q1</text>
                <text x="60" y="45" fill="#64748b" font-size="6">Q2</text>
                <text x="108" y="45" fill="#64748b" font-size="6">Q3</text>
                <text x="156" y="45" fill="#64748b" font-size="6">Q4</text>
                
                <rect x="12" y="55" width="70" height="12" rx="3" fill="#ef4444"/>
                <rect x="50" y="72" width="80" height="12" rx="3" fill="#6366f1"/>
                <rect x="90" y="89" width="60" height="12" rx="3" fill="#10b981"/>
                <rect x="40" y="106" width="100" height="12" rx="3" fill="#f59e0b"/>
                <rect x="130" y="120" width="55" height="10" rx="3" fill="#8b5cf6"/>
            </svg>
        `;
    }

    // Healthcare User Flow
    const userflow = document.getElementById('healthcare-userflow');
    if (userflow) {
        userflow.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                
                <circle cx="25" cy="35" r="12" fill="#ffd02f" opacity="0.3" stroke="#ffd02f" stroke-width="1"/>
                <text x="25" y="38" fill="#ffd02f" font-size="6" text-anchor="middle">Start</text>
                
                <line x1="37" y1="35" x2="55" y2="35" stroke="#64748b" stroke-width="1"/>
                
                <rect x="55" y="25" width="40" height="20" rx="4" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1"/>
                <text x="75" y="38" fill="#6366f1" font-size="5" text-anchor="middle">Admit</text>
                
                <line x1="95" y1="35" x2="110" y2="35" stroke="#64748b" stroke-width="1"/>
                
                <rect x="110" y="25" width="40" height="20" rx="4" fill="#8b5cf6" opacity="0.3" stroke="#8b5cf6" stroke-width="1"/>
                <text x="130" y="38" fill="#8b5cf6" font-size="5" text-anchor="middle">Assign</text>
                
                <line x1="150" y1="35" x2="165" y2="35" stroke="#64748b" stroke-width="1"/>
                
                <circle cx="178" cy="35" r="12" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="1"/>
                
                <rect x="55" y="65" width="40" height="20" rx="4" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="1"/>
                <text x="75" y="78" fill="#ef4444" font-size="5" text-anchor="middle">Monitor</text>
                
                <rect x="110" y="65" width="40" height="20" rx="4" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" stroke-width="1"/>
                <text x="130" y="78" fill="#f59e0b" font-size="5" text-anchor="middle">Handoff</text>
                
                <line x1="130" y1="45" x2="130" y2="65" stroke="#64748b" stroke-width="1" stroke-dasharray="2"/>
                <line x1="75" y1="45" x2="75" y2="65" stroke="#64748b" stroke-width="1" stroke-dasharray="2"/>
                
                <rect x="55" y="100" width="95" height="25" rx="4" fill="#16161f" stroke="#64748b" stroke-width="0.5"/>
                <text x="102" y="115" fill="#64748b" font-size="6" text-anchor="middle">Miro Journey Map</text>
            </svg>
        `;
    }

    // Healthcare Schema
    const schema = document.getElementById('healthcare-schema');
    if (schema) {
        schema.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="10" y="10" width="55" height="50" rx="4" fill="#12121a" stroke="#6366f1" stroke-width="1"/>
                <text x="18" y="25" fill="#6366f1" font-size="6" font-weight="500">Patients</text>
                <rect x="15" y="32" width="40" height="4" fill="#64748b" opacity="0.3"/>
                <rect x="15" y="40" width="35" height="4" fill="#64748b" opacity="0.3"/>
                <rect x="15" y="48" width="38" height="4" fill="#64748b" opacity="0.3"/>
                
                <rect x="75" y="10" width="55" height="50" rx="4" fill="#12121a" stroke="#ef4444" stroke-width="1"/>
                <text x="83" y="25" fill="#ef4444" font-size="6" font-weight="500">Visits</text>
                
                <rect x="140" y="10" width="55" height="50" rx="4" fill="#12121a" stroke="#10b981" stroke-width="1"/>
                <text x="148" y="25" fill="#10b981" font-size="6" font-weight="500">Staff</text>
                
                <rect x="40" y="80" width="55" height="50" rx="4" fill="#12121a" stroke="#8b5cf6" stroke-width="1"/>
                <text x="48" y="95" fill="#8b5cf6" font-size="6" font-weight="500">Beds</text>
                
                <rect x="110" y="80" width="55" height="50" rx="4" fill="#12121a" stroke="#f59e0b" stroke-width="1"/>
                <text x="118" y="95" fill="#f59e0b" font-size="6" font-weight="500">Depts</text>
                
                <line x1="65" y1="35" x2="75" y2="35" stroke="#64748b" stroke-width="1"/>
                <line x1="130" y1="35" x2="140" y2="35" stroke="#64748b" stroke-width="1"/>
                <line x1="100" y1="60" x2="70" y2="80" stroke="#64748b" stroke-width="1"/>
                <line x1="100" y1="60" x2="135" y2="80" stroke="#64748b" stroke-width="1"/>
            </svg>
        `;
    }
}

function initRetailArtifacts() {
    const wireframe = document.getElementById('retail-wireframe');
    if (wireframe) {
        wireframe.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="25" fill="#12121a" rx="4"/>
                <rect x="12" y="12" width="50" height="10" fill="#8b5cf6" opacity="0.3" rx="2"/>
                <rect x="150" y="10" width="38" height="14" fill="#8b5cf6" rx="7"/>
                
                <rect x="5" y="35" width="60" height="45" fill="#12121a" rx="4"/>
                <text x="15" y="50" fill="#f8fafc" font-size="7">2,847</text>
                <text x="15" y="62" fill="#64748b" font-size="5">Total SKUs</text>
                <rect x="12" y="68" width="45" height="4" fill="#8b5cf6" rx="1"/>
                
                <rect x="70" y="35" width="60" height="45" fill="#12121a" rx="4"/>
                <text x="80" y="50" fill="#10b981" font-size="7">94%</text>
                <text x="80" y="62" fill="#64748b" font-size="5">In Stock</text>
                
                <rect x="135" y="35" width="60" height="45" fill="#12121a" rx="4"/>
                <text x="145" y="50" fill="#ef4444" font-size="7">23</text>
                <text x="145" y="62" fill="#64748b" font-size="5">Low Stock</text>
                
                <rect x="5" y="85" width="190" height="50" fill="#12121a" rx="4"/>
                <rect x="12" y="92" width="60" height="6" fill="#64748b" rx="1"/>
                <rect x="12" y="105" width="175" height="25" fill="#16161f" rx="3"/>
                <rect x="20" y="110" width="40" height="4" fill="#64748b" opacity="0.4"/>
                <rect x="20" y="118" width="30" height="4" fill="#64748b" opacity="0.3"/>
            </svg>
        `;
    }

    const airtable = document.getElementById('retail-airtable');
    if (airtable) {
        airtable.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                <rect x="10" y="10" width="50" height="15" rx="3" fill="#18bfff"/>
                <text x="18" y="21" fill="white" font-size="6">Releases</text>
                
                <rect x="12" y="32" width="85" height="25" rx="4" fill="#16161f" stroke="#6366f1" stroke-width="1"/>
                <text x="20" y="48" fill="#f8fafc" font-size="6">Phase 1: Core</text>
                
                <rect x="102" y="32" width="85" height="25" rx="4" fill="#16161f" stroke="#8b5cf6" stroke-width="1"/>
                <text x="110" y="48" fill="#f8fafc" font-size="6">Phase 2: Mobile</text>
                
                <rect x="12" y="62" width="85" height="25" rx="4" fill="#16161f" stroke="#10b981" stroke-width="1"/>
                <text x="20" y="78" fill="#f8fafc" font-size="6">Phase 3: Analytics</text>
                
                <rect x="102" y="62" width="85" height="25" rx="4" fill="#16161f" stroke="#f59e0b" stroke-width="1"/>
                <text x="110" y="78" fill="#f8fafc" font-size="6">Phase 4: AI</text>
                
                <rect x="12" y="95" width="175" height="35" fill="#16161f" rx="4"/>
                <text x="20" y="110" fill="#64748b" font-size="6">200+ features · 4 teams · 20 weeks</text>
                <rect x="20" y="118" width="80" height="6" fill="#8b5cf6" rx="2"/>
                <rect x="105" y="118" width="40" height="6" fill="#8b5cf6" opacity="0.4" rx="2"/>
            </svg>
        `;
    }

    const userflow = document.getElementById('retail-userflow');
    if (userflow) {
        userflow.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                
                <rect x="15" y="20" width="45" height="25" rx="4" fill="#8b5cf6" opacity="0.3" stroke="#8b5cf6" stroke-width="1"/>
                <text x="38" y="36" fill="#8b5cf6" font-size="5" text-anchor="middle">Scan Item</text>
                
                <line x1="60" y1="32" x2="75" y2="32" stroke="#64748b" stroke-width="1"/>
                
                <rect x="75" y="20" width="45" height="25" rx="4" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="1"/>
                <text x="98" y="36" fill="#10b981" font-size="5" text-anchor="middle">Check Stock</text>
                
                <line x1="120" y1="32" x2="135" y2="32" stroke="#64748b" stroke-width="1"/>
                
                <rect x="135" y="20" width="50" height="25" rx="4" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1"/>
                <text x="160" y="36" fill="#6366f1" font-size="5" text-anchor="middle">Reorder</text>
                
                <line x1="98" y1="45" x2="98" y2="65" stroke="#64748b" stroke-width="1"/>
                
                <rect x="75" y="65" width="45" height="25" rx="4" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" stroke-width="1"/>
                <text x="98" y="81" fill="#f59e0b" font-size="5" text-anchor="middle">Alert</text>
                
                <rect x="20" y="105" width="160" height="25" fill="#16161f" rx="4" stroke="#ffd02f" stroke-width="0.5"/>
                <text x="100" y="120" fill="#ffd02f" font-size="6" text-anchor="middle">Miro: Store Associate Journey</text>
            </svg>
        `;
    }

    const mobile = document.getElementById('retail-mobile');
    if (mobile) {
        mobile.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="65" y="5" width="70" height="130" rx="8" fill="#12121a" stroke="#64748b" stroke-width="1"/>
                <rect x="85" y="10" width="30" height="4" rx="2" fill="#64748b" opacity="0.3"/>
                
                <rect x="72" y="22" width="56" height="35" fill="#16161f" rx="4"/>
                <rect x="78" y="28" width="25" height="6" fill="#8b5cf6" rx="2"/>
                <rect x="78" y="38" width="40" height="4" fill="#64748b" opacity="0.4"/>
                <rect x="78" y="46" width="35" height="4" fill="#64748b" opacity="0.3"/>
                
                <rect x="72" y="62" width="56" height="25" fill="#16161f" rx="4"/>
                <rect x="78" y="68" width="20" height="12" fill="#10b981" opacity="0.3" rx="2"/>
                <rect x="102" y="68" width="20" height="12" fill="#ef4444" opacity="0.3" rx="2"/>
                
                <rect x="72" y="92" width="56" height="35" fill="#16161f" rx="4"/>
                <rect x="78" y="98" width="44" height="8" fill="#6366f1" rx="4"/>
                <rect x="78" y="112" width="44" height="8" fill="#64748b" opacity="0.3" rx="4"/>
            </svg>
        `;
    }
}

function initManufacturingArtifacts() {
    const wireframe = document.getElementById('mfg-wireframe');
    if (wireframe) {
        wireframe.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                
                <rect x="12" y="12" width="85" height="55" fill="#16161f" rx="4"/>
                <text x="20" y="26" fill="#06b6d4" font-size="7" font-weight="500">Line 1</text>
                <rect x="20" y="32" width="65" height="6" fill="#10b981" rx="2"/>
                <text x="20" y="50" fill="#f8fafc" font-size="10">94.2%</text>
                <text x="65" y="50" fill="#64748b" font-size="6">OEE</text>
                
                <rect x="102" y="12" width="85" height="55" fill="#16161f" rx="4"/>
                <text x="110" y="26" fill="#06b6d4" font-size="7" font-weight="500">Line 2</text>
                <rect x="110" y="32" width="50" height="6" fill="#f59e0b" rx="2"/>
                <text x="110" y="50" fill="#f8fafc" font-size="10">78.5%</text>
                <text x="155" y="50" fill="#64748b" font-size="6">OEE</text>
                
                <rect x="12" y="72" width="175" height="55" fill="#16161f" rx="4"/>
                <text x="20" y="86" fill="#64748b" font-size="6">Production Timeline</text>
                <rect x="20" y="95" width="40" height="8" fill="#10b981" rx="2"/>
                <rect x="65" y="95" width="55" height="8" fill="#6366f1" rx="2"/>
                <rect x="125" y="95" width="30" height="8" fill="#8b5cf6" rx="2"/>
                <rect x="20" y="110" width="60" height="8" fill="#f59e0b" rx="2"/>
                <rect x="85" y="110" width="70" height="8" fill="#ef4444" rx="2"/>
            </svg>
        `;
    }

    const airtable = document.getElementById('mfg-airtable');
    if (airtable) {
        airtable.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                <rect x="10" y="10" width="60" height="15" rx="3" fill="#18bfff"/>
                <text x="18" y="21" fill="white" font-size="6">Gallery View</text>
                
                <rect x="12" y="32" width="55" height="45" rx="4" fill="#16161f" stroke="#06b6d4" stroke-width="1"/>
                <rect x="18" y="38" width="43" height="20" fill="#06b6d4" opacity="0.2" rx="2"/>
                <rect x="18" y="62" width="30" height="4" fill="#f8fafc" rx="1"/>
                <rect x="18" y="70" width="38" height="3" fill="#64748b" opacity="0.4"/>
                
                <rect x="72" y="32" width="55" height="45" rx="4" fill="#16161f" stroke="#10b981" stroke-width="1"/>
                <rect x="78" y="38" width="43" height="20" fill="#10b981" opacity="0.2" rx="2"/>
                
                <rect x="132" y="32" width="55" height="45" rx="4" fill="#16161f" stroke="#f59e0b" stroke-width="1"/>
                <rect x="138" y="38" width="43" height="20" fill="#f59e0b" opacity="0.2" rx="2"/>
                
                <rect x="12" y="82" width="55" height="45" rx="4" fill="#16161f" stroke="#8b5cf6" stroke-width="1"/>
                <rect x="72" y="82" width="55" height="45" rx="4" fill="#16161f" stroke="#ef4444" stroke-width="1"/>
                <rect x="132" y="82" width="55" height="45" rx="4" fill="#16161f" stroke="#6366f1" stroke-width="1"/>
            </svg>
        `;
    }

    const userflow = document.getElementById('mfg-userflow');
    if (userflow) {
        userflow.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                
                <circle cx="30" cy="35" r="15" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="1"/>
                <text x="30" y="38" fill="#ef4444" font-size="6" text-anchor="middle">Alert</text>
                
                <line x1="45" y1="35" x2="65" y2="35" stroke="#64748b" stroke-width="1"/>
                
                <rect x="65" y="22" width="45" height="26" rx="4" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" stroke-width="1"/>
                <text x="88" y="38" fill="#f59e0b" font-size="5" text-anchor="middle">Diagnose</text>
                
                <line x1="110" y1="35" x2="125" y2="35" stroke="#64748b" stroke-width="1"/>
                
                <rect x="125" y="22" width="45" height="26" rx="4" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="1"/>
                <text x="148" y="38" fill="#10b981" font-size="5" text-anchor="middle">Resolve</text>
                
                <line x1="88" y1="48" x2="88" y2="70" stroke="#64748b" stroke-width="1" stroke-dasharray="2"/>
                
                <rect x="65" y="70" width="70" height="26" rx="4" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1"/>
                <text x="100" y="86" fill="#6366f1" font-size="5" text-anchor="middle">Escalate</text>
                
                <rect x="20" y="108" width="160" height="22" fill="#16161f" rx="4" stroke="#ffd02f" stroke-width="0.5"/>
                <text x="100" y="122" fill="#ffd02f" font-size="6" text-anchor="middle">Miro: Alert Response Flow</text>
            </svg>
        `;
    }

    const mobile = document.getElementById('mfg-mobile');
    if (mobile) {
        mobile.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="65" y="5" width="70" height="130" rx="8" fill="#12121a" stroke="#64748b" stroke-width="1"/>
                <rect x="85" y="10" width="30" height="4" rx="2" fill="#64748b" opacity="0.3"/>
                
                <rect x="72" y="22" width="56" height="30" fill="#ef4444" opacity="0.2" rx="4"/>
                <text x="100" y="42" fill="#ef4444" font-size="8" text-anchor="middle">ALERT</text>
                
                <rect x="72" y="58" width="56" height="35" fill="#16161f" rx="4"/>
                <text x="80" y="72" fill="#f8fafc" font-size="6">Line 2 - Jam</text>
                <rect x="80" y="78" width="40" height="4" fill="#64748b" opacity="0.4"/>
                
                <rect x="72" y="98" width="26" height="28" fill="#10b981" rx="4"/>
                <text x="85" y="115" fill="white" font-size="6" text-anchor="middle">ACK</text>
                
                <rect x="102" y="98" width="26" height="28" fill="#f59e0b" rx="4"/>
                <text x="115" y="115" fill="white" font-size="6" text-anchor="middle">ESC</text>
            </svg>
        `;
    }
}

function initEcommerceArtifacts() {
    const wireframe = document.getElementById('ecom-wireframe');
    if (wireframe) {
        wireframe.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                
                <rect x="12" y="12" width="175" height="22" fill="#16161f" rx="4"/>
                <rect x="18" y="17" width="60" height="12" fill="#10b981" opacity="0.3" rx="3"/>
                <text x="30" y="26" fill="#10b981" font-size="6">Seller Hub</text>
                <circle cx="170" cy="23" r="8" fill="#6366f1"/>
                
                <rect x="12" y="40" width="55" height="40" fill="#16161f" rx="4"/>
                <text x="22" y="55" fill="#f8fafc" font-size="8">$45.2K</text>
                <text x="22" y="68" fill="#64748b" font-size="5">This Month</text>
                
                <rect x="72" y="40" width="55" height="40" fill="#16161f" rx="4"/>
                <text x="82" y="55" fill="#10b981" font-size="8">847</text>
                <text x="82" y="68" fill="#64748b" font-size="5">Orders</text>
                
                <rect x="132" y="40" width="55" height="40" fill="#16161f" rx="4"/>
                <text x="142" y="55" fill="#f59e0b" font-size="8">4.8</text>
                <text x="142" y="68" fill="#64748b" font-size="5">Rating</text>
                
                <rect x="12" y="86" width="175" height="42" fill="#16161f" rx="4"/>
                <text x="22" y="100" fill="#f8fafc" font-size="6">Recent Orders</text>
                <rect x="22" y="108" width="155" height="14" fill="#0f0f17" rx="2"/>
            </svg>
        `;
    }

    const airtable = document.getElementById('ecom-airtable');
    if (airtable) {
        airtable.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                <rect x="10" y="10" width="50" height="15" rx="3" fill="#18bfff"/>
                <text x="18" y="21" fill="white" font-size="6">Kanban</text>
                
                <rect x="12" y="32" width="42" height="95" fill="#16161f" rx="4"/>
                <text x="20" y="45" fill="#64748b" font-size="5">Backlog</text>
                <rect x="16" y="52" width="34" height="18" fill="#64748b" opacity="0.2" rx="2"/>
                <rect x="16" y="74" width="34" height="18" fill="#64748b" opacity="0.2" rx="2"/>
                
                <rect x="58" y="32" width="42" height="95" fill="#16161f" rx="4"/>
                <text x="66" y="45" fill="#6366f1" font-size="5">In Design</text>
                <rect x="62" y="52" width="34" height="18" fill="#6366f1" opacity="0.3" rx="2"/>
                <rect x="62" y="74" width="34" height="18" fill="#6366f1" opacity="0.3" rx="2"/>
                
                <rect x="104" y="32" width="42" height="95" fill="#16161f" rx="4"/>
                <text x="112" y="45" fill="#8b5cf6" font-size="5">Dev</text>
                <rect x="108" y="52" width="34" height="18" fill="#8b5cf6" opacity="0.3" rx="2"/>
                
                <rect x="150" y="32" width="42" height="95" fill="#16161f" rx="4"/>
                <text x="158" y="45" fill="#10b981" font-size="5">Done</text>
                <rect x="154" y="52" width="34" height="18" fill="#10b981" opacity="0.3" rx="2"/>
                <rect x="154" y="74" width="34" height="18" fill="#10b981" opacity="0.3" rx="2"/>
                <rect x="154" y="96" width="34" height="18" fill="#10b981" opacity="0.3" rx="2"/>
            </svg>
        `;
    }

    const userflow = document.getElementById('ecom-userflow');
    if (userflow) {
        userflow.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                
                <rect x="15" y="15" width="40" height="22" rx="4" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1"/>
                <text x="35" y="29" fill="#6366f1" font-size="5" text-anchor="middle">Register</text>
                
                <line x1="55" y1="26" x2="70" y2="26" stroke="#64748b" stroke-width="1"/>
                
                <rect x="70" y="15" width="40" height="22" rx="4" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" stroke-width="1"/>
                <text x="90" y="29" fill="#f59e0b" font-size="5" text-anchor="middle">Verify</text>
                
                <line x1="110" y1="26" x2="125" y2="26" stroke="#64748b" stroke-width="1"/>
                
                <rect x="125" y="15" width="40" height="22" rx="4" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="1"/>
                <text x="145" y="29" fill="#10b981" font-size="5" text-anchor="middle">Approve</text>
                
                <line x1="145" y1="37" x2="145" y2="52" stroke="#64748b" stroke-width="1"/>
                
                <rect x="125" y="52" width="40" height="22" rx="4" fill="#8b5cf6" opacity="0.3" stroke="#8b5cf6" stroke-width="1"/>
                <text x="145" y="66" fill="#8b5cf6" font-size="5" text-anchor="middle">Catalog</text>
                
                <line x1="125" y1="63" x2="110" y2="63" stroke="#64748b" stroke-width="1"/>
                
                <rect x="70" y="52" width="40" height="22" rx="4" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="1"/>
                <text x="90" y="66" fill="#ef4444" font-size="5" text-anchor="middle">1st Sale</text>
                
                <rect x="30" y="95" width="140" height="35" fill="#16161f" rx="4" stroke="#ffd02f" stroke-width="0.5"/>
                <text x="100" y="115" fill="#ffd02f" font-size="6" text-anchor="middle">Miro: Seller Onboarding Journey</text>
            </svg>
        `;
    }

    const annotations = document.getElementById('ecom-annotations');
    if (annotations) {
        annotations.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="130" height="130" fill="#12121a" rx="4"/>
                <rect x="12" y="12" width="115" height="15" fill="#16161f" rx="3"/>
                <rect x="12" y="32" width="115" height="60" fill="#16161f" rx="3"/>
                <rect x="12" y="97" width="55" height="30" fill="#16161f" rx="3"/>
                <rect x="72" y="97" width="55" height="30" fill="#16161f" rx="3"/>
                
                <circle cx="155" cy="35" r="12" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="1"/>
                <text x="155" y="39" fill="#f59e0b" font-size="8" text-anchor="middle">1</text>
                <line x1="143" y1="35" x2="127" y2="20" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2"/>
                
                <circle cx="175" cy="65" r="12" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="1"/>
                <text x="175" y="69" fill="#f59e0b" font-size="8" text-anchor="middle">2</text>
                <line x1="163" y1="65" x2="127" y2="55" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2"/>
                
                <circle cx="155" cy="110" r="12" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="1"/>
                <text x="155" y="114" fill="#f59e0b" font-size="8" text-anchor="middle">3</text>
                <line x1="143" y1="110" x2="127" y2="112" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2"/>
            </svg>
        `;
    }
}

function initBankingArtifacts() {
    const wireframe = document.getElementById('bank-wireframe');
    if (wireframe) {
        wireframe.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                
                <rect x="12" y="12" width="175" height="25" fill="#16161f" rx="4"/>
                <text x="22" y="28" fill="#f8fafc" font-size="7">Loan Application #LA-2024-1847</text>
                <rect x="150" y="18" width="30" height="12" fill="#6366f1" rx="6"/>
                
                <rect x="12" y="42" width="175" height="18" fill="#16161f" rx="3"/>
                <circle cx="40" cy="51" r="5" fill="#10b981"/>
                <circle cx="80" cy="51" r="5" fill="#10b981"/>
                <circle cx="120" cy="51" r="5" fill="#6366f1"/>
                <circle cx="160" cy="51" r="5" fill="#64748b" opacity="0.4"/>
                <line x1="45" y1="51" x2="75" y2="51" stroke="#10b981" stroke-width="1"/>
                <line x1="85" y1="51" x2="115" y2="51" stroke="#10b981" stroke-width="1"/>
                <line x1="125" y1="51" x2="155" y2="51" stroke="#64748b" stroke-width="1" stroke-dasharray="2"/>
                
                <rect x="12" y="65" width="85" height="65" fill="#16161f" rx="4"/>
                <text x="22" y="80" fill="#64748b" font-size="5">Applicant Details</text>
                <rect x="22" y="88" width="65" height="5" fill="#64748b" opacity="0.3"/>
                <rect x="22" y="98" width="55" height="5" fill="#64748b" opacity="0.3"/>
                <rect x="22" y="108" width="60" height="5" fill="#64748b" opacity="0.3"/>
                <rect x="22" y="118" width="50" height="5" fill="#64748b" opacity="0.3"/>
                
                <rect x="102" y="65" width="85" height="65" fill="#16161f" rx="4"/>
                <text x="112" y="80" fill="#64748b" font-size="5">Loan Details</text>
                <text x="112" y="98" fill="#f8fafc" font-size="9">$2.5M</text>
                <rect x="112" y="108" width="40" height="12" fill="#6366f1" opacity="0.3" rx="3"/>
            </svg>
        `;
    }

    const airtable = document.getElementById('bank-airtable');
    if (airtable) {
        airtable.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                <rect x="10" y="10" width="70" height="15" rx="3" fill="#18bfff"/>
                <text x="18" y="21" fill="white" font-size="6">Compliance Tracker</text>
                
                <rect x="12" y="32" width="175" height="18" fill="#16161f" rx="3"/>
                <text x="20" y="44" fill="#64748b" font-size="5">Requirement</text>
                <text x="90" y="44" fill="#64748b" font-size="5">Status</text>
                <text x="140" y="44" fill="#64748b" font-size="5">Features</text>
                
                <rect x="12" y="54" width="175" height="18" fill="#16161f" rx="3"/>
                <text x="20" y="66" fill="#f8fafc" font-size="5">SOX Compliance</text>
                <rect x="90" y="59" width="30" height="10" fill="#10b981" opacity="0.3" rx="5"/>
                <text x="140" y="66" fill="#6366f1" font-size="5">12 linked</text>
                
                <rect x="12" y="76" width="175" height="18" fill="#16161f" rx="3"/>
                <text x="20" y="88" fill="#f8fafc" font-size="5">FDIC Requirements</text>
                <rect x="90" y="81" width="30" height="10" fill="#f59e0b" opacity="0.3" rx="5"/>
                <text x="140" y="88" fill="#6366f1" font-size="5">8 linked</text>
                
                <rect x="12" y="98" width="175" height="18" fill="#16161f" rx="3"/>
                <text x="20" y="110" fill="#f8fafc" font-size="5">BSA/AML</text>
                <rect x="90" y="103" width="30" height="10" fill="#10b981" opacity="0.3" rx="5"/>
                <text x="140" y="110" fill="#6366f1" font-size="5">15 linked</text>
                
                <rect x="12" y="120" width="175" height="10" fill="#6366f1" opacity="0.1" rx="3"/>
                <text x="100" y="128" fill="#6366f1" font-size="5" text-anchor="middle">35 total linked records</text>
            </svg>
        `;
    }

    const userflow = document.getElementById('bank-userflow');
    if (userflow) {
        userflow.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                
                <rect x="15" y="15" width="35" height="20" rx="3" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1"/>
                <text x="33" y="28" fill="#6366f1" font-size="5" text-anchor="middle">Apply</text>
                
                <line x1="50" y1="25" x2="60" y2="25" stroke="#64748b" stroke-width="1"/>
                
                <rect x="60" y="15" width="35" height="20" rx="3" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" stroke-width="1"/>
                <text x="78" y="28" fill="#f59e0b" font-size="5" text-anchor="middle">Review</text>
                
                <line x1="95" y1="25" x2="105" y2="25" stroke="#64748b" stroke-width="1"/>
                
                <rect x="105" y="15" width="35" height="20" rx="3" fill="#8b5cf6" opacity="0.3" stroke="#8b5cf6" stroke-width="1"/>
                <text x="123" y="28" fill="#8b5cf6" font-size="5" text-anchor="middle">Credit</text>
                
                <line x1="140" y1="25" x2="150" y2="25" stroke="#64748b" stroke-width="1"/>
                
                <rect x="150" y="15" width="35" height="20" rx="3" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="1"/>
                <text x="168" y="28" fill="#10b981" font-size="5" text-anchor="middle">Approve</text>
                
                <line x1="123" y1="35" x2="123" y2="50" stroke="#64748b" stroke-width="1"/>
                
                <rect x="60" y="50" width="80" height="20" rx="3" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="1"/>
                <text x="100" y="63" fill="#ef4444" font-size="5" text-anchor="middle">Decline / Request Info</text>
                
                <rect x="30" y="90" width="140" height="35" fill="#16161f" rx="4" stroke="#ffd02f" stroke-width="0.5"/>
                <text x="100" y="110" fill="#ffd02f" font-size="6" text-anchor="middle">Miro: Loan Approval Workflow</text>
            </svg>
        `;
    }

    const dashboard = document.getElementById('bank-dashboard');
    if (dashboard) {
        dashboard.innerHTML = `
            <svg viewBox="0 0 200 140" width="100%" height="100%" style="background: #0f0f17;">
                <rect x="5" y="5" width="190" height="130" fill="#12121a" rx="4"/>
                
                <rect x="12" y="12" width="60" height="55" fill="#16161f" rx="4"/>
                <text x="22" y="28" fill="#64748b" font-size="5">Portfolio Value</text>
                <text x="22" y="45" fill="#f8fafc" font-size="10">$2.1B</text>
                <rect x="22" y="52" width="40" height="6" fill="#10b981" rx="2"/>
                
                <rect x="77" y="12" width="55" height="55" fill="#16161f" rx="4"/>
                <text x="87" y="28" fill="#64748b" font-size="5">Active Loans</text>
                <text x="87" y="45" fill="#f8fafc" font-size="10">847</text>
                
                <rect x="137" y="12" width="55" height="55" fill="#16161f" rx="4"/>
                <text x="147" y="28" fill="#64748b" font-size="5">Default Rate</text>
                <text x="147" y="45" fill="#10b981" font-size="10">0.8%</text>
                
                <rect x="12" y="72" width="175" height="55" fill="#16161f" rx="4"/>
                <text x="22" y="88" fill="#64748b" font-size="5">Loan Pipeline</text>
                <rect x="22" y="95" width="155" height="6" fill="#0f0f17" rx="2"/>
                <rect x="22" y="95" width="60" height="6" fill="#6366f1" rx="2"/>
                <rect x="22" y="108" width="155" height="6" fill="#0f0f17" rx="2"/>
                <rect x="22" y="108" width="100" height="6" fill="#10b981" rx="2"/>
                <rect x="22" y="118" width="155" height="6" fill="#0f0f17" rx="2"/>
                <rect x="22" y="118" width="30" height="6" fill="#f59e0b" rx="2"/>
            </svg>
        `;
    }
}

/* ============================================
   Scroll Animations
   ============================================ */
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(section);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}











        // Career Data (embedded to avoid CORS issues)
        const careerData = [
            {
                name: "Doktor",
                description: "HastalÄ±klarÄ± teÅŸhis ve tedavi eden, insan saÄŸlÄ±ÄŸÄ±nÄ± koruyan tÄ±p uzmanÄ±.",
                requirements: {
                    "Fen Bilimleri Ä°lgisi": 3.0,
                    "SayÄ±sal Yetenek": 3.0,
                    "GÃ¶z-El Koordinasyonu": 3.0,
                    "Sosyal YardÄ±m Ä°lgisi": 3.5
                },
                vr_image: "images/doctor_simulation.png",
                hasVRVideo: true,
                vrVideoFile: "https://youtu.be/jeBFt57HlZ4?si=6osOSkJ8gGwqF3dx",
                vrDescription: "Ameliyathane ortamÄ±nda 360Â° tÄ±bbi mÃ¼dahale deneyimi."
            },
            {
                name: "Ã–ÄŸretmen",
                description: "Ã–ÄŸrencilere bilgi ve beceri kazandÄ±ran, eÄŸitim sÃ¼reÃ§lerini yÃ¶neten, pedagojik formasyona sahip kiÅŸi.",
                requirements: {
                    "SÃ¶zel Yetenek": 3.5,
                    "Sosyal Bilimler Ä°lgisi": 3.5,
                    "Sosyal YardÄ±m Ä°lgisi": 2.5,
                    "Ä°kna Ä°lgisi": 2.5
                },
                vr_image: "images/teacher_simulation.png",
                hasVRVideo: true,
                vrVideoFile: "https://youtu.be/CSY0pHI8h34?si=sRjAYqNdp7R_yJwx",
                vrDescription: "Ã–ÄŸretmenlik mesleÄŸini 360Â° VR video ile deneyimleyin."
            },
            {
                name: "Veteriner",
                description: "Hayvan saÄŸlÄ±ÄŸÄ±nÄ± koruyan, tedavi eden klinik ve bakÄ±m uzmanÄ±.",
                requirements: {
                    "Fen Bilimleri Ä°lgisi": 4.0,
                    "SayÄ±sal Yetenek": 3.0,
                    "Sosyal YardÄ±m Ä°lgisi": 3.5,
                    "Ziraat Ä°lgisi": 3.0
                },
                vr_image: "images/veterinary_clinic_simulation.png",
                hasVRVideo: true,
                vrVideoFile: "https://www.youtube.com/watch?v=EGDXVQwOGf0",
                vrDescription: "360Â° hayvan muayenesi ve klinik deneyimi."
            },
            {
                name: "HemÅŸire",
                description: "HastalarÄ±n bakÄ±mÄ±nÄ± Ã¼stlenen, tedavi sÃ¼recini destekleyen saÄŸlÄ±k profesyoneli.",
                requirements: {
                    "Sosyal YardÄ±m Ä°lgisi": 4.0,
                    "Fen Bilimleri Ä°lgisi": 3.0,
                    "GÃ¶z-El Koordinasyonu": 3.0,
                    "SÃ¶zel Yetenek": 2.5
                },
                vr_image: "images/nurse_simulation.png",
                hasVRVideo: true,
                vrVideoFile: "https://www.youtube.com/watch?v=4--pyJLhlB0",
                vrDescription: "Hastane iÃ§inde 360Â° hemÅŸirelik deneyimi."
            },
            {
                name: "Bilgisayar Grafik Teknikeri",
                description: "2D/3D grafikler, animasyonlar ve dijital tasarÄ±mlar oluÅŸturan teknik uzman.",
                requirements: {
                    "Åekil-Uzay YeteneÄŸi": 4.0,
                    "GÃ¼zel Sanatlar Ä°lgisi": 3.5,
                    "SayÄ±sal Yetenek": 3.0
                },
                vr_image: "images/graphic_technician_simulation.png",
                hasVRVideo: true,
                vrVideoFile: "https://www.youtube.com/watch?v=mw8y18D8GBM",
                vrDescription: "360Â° dijital grafik atÃ¶lyesi deneyimi."
            },
            {
                name: "Astronot",
                description: "Uzay gÃ¶revlerinde araÅŸtÄ±rmalar yapan ve uzay araÃ§larÄ±nÄ± kullanan uzman.",
                requirements: {
                    "Fen Bilimleri Ä°lgisi": 3.5,
                    "SayÄ±sal Yetenek": 3.5,
                    "Åekil-Uzay YeteneÄŸi": 4.0,
                    "Mekanik Ä°lgi": 3.5,
                    "GÃ¶z-El Koordinasyonu": 3.5,
                    "YabancÄ± Dil Ä°lgisi": 3.0
                },
                vr_image: "images/astronaut_spacewalk_simulation.png",
                hasVRVideo: true,
                vrVideoFile: "https://www.youtube.com/watch?v=hEdzv7D4CbQ&t=5s",
                vrDescription: "UluslararasÄ± Uzay Ä°stasyonu'nda 360Â° uzay yÃ¼rÃ¼yÃ¼ÅŸÃ¼ deneyimi."
            },
            {
                name: "BahÃ§Ä±van",
                description: "Bitki yetiÅŸtirme, bahÃ§e bakÄ±mÄ± ve peyzaj iÅŸleriyle ilgilenen uzman.",
                requirements: {
                    "Ziraat Ä°lgisi": 4.0,
                    "GÃ¶z-El Koordinasyonu": 2.5,
                    "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi": 2.5
                },
                vr_image: "images/gardener_simulation.png",
                hasVRVideo: true,
                vrVideoFile: "https://www.youtube.com/watch?v=7fcds-B8czg&t=21s",
                vrDescription: "360Â° bitki yetiÅŸtirme ve bahÃ§e bakÄ±m simÃ¼lasyonu."
            },
            {
                name: "Ressam",
                description: "DuygularÄ±nÄ± ve dÃ¼ÅŸÃ¼ncelerini resim yoluyla ifade eden sanatÃ§Ä±.",
                requirements: {
                    "GÃ¼zel Sanatlar Ä°lgisi": 4.0,
                    "Åekil-Uzay YeteneÄŸi": 3.5,
                    "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi": 3.0
                },
                vr_image: "images/painter_studio_simulation.png",
                hasVRVideo: true,
                vrVideoFile: "https://www.youtube.com/watch?v=pq2TwRNy_FU",
                vrDescription: "360Â° sanat atÃ¶lyesi deneyimi."
            },
            {
                name: "Ä°tfaiyeci",
                description: "YangÄ±nlara mÃ¼dahale eden, arama-kurtarma yapan kamu gÃ¼venliÄŸi Ã§alÄ±ÅŸanÄ±.",
                requirements: {
                    "GÃ¶z-El Koordinasyonu": 4.0,
                    "Mekanik Ä°lgi": 3.0,
                    "Åekil-Uzay YeteneÄŸi": 3.0,
                    "Sosyal YardÄ±m Ä°lgisi": 4.0
                },
                vr_image: "images/firefighter_rescue_simulation.png",
                hasVRVideo: true,
                vrVideoFile: "https://www.youtube.com/watch?v=W5njz511s1k",
                vrDescription: "itfaiye istasyonunda 360Â° deneyim"
            },
            {
                name: "Mekanik MÃ¼hendisi",
                description: "Makine sistemlerini tasarlayan, analiz eden ve geliÅŸtiren mÃ¼hendislik uzmanÄ±.",
                requirements: {
                    "SayÄ±sal Yetenek": 4.0,
                    "Mekanik Ä°lgi": 4.0,
                    "Åekil-Uzay YeteneÄŸi": 3.5,
                    "Fen Bilimleri Ä°lgisi": 3.5
                },
                vr_image: "images/mechanical_engineer_simulation.png",
                hasVRVideo: true,
                vrVideoFile: "https://youtu.be/npEv3YZLSMs?si=WgxbPI-jZpmNWH3N",
                vrDescription: "360Â° makine tasarÄ±m ve mÃ¼hendislik uygulama ortamÄ±."
            },
            {
                name: "Psikolojik DanÄ±ÅŸman",
                description: "Bireylerin duygusal, sosyal ve akademik geliÅŸimini destekleyen, rehberlik hizmeti sunan uzman.",
                requirements: {
                    "SÃ¶zel Yetenek": 3.5,
                    "Sosyal YardÄ±m Ä°lgisi": 4.0,
                    "Sosyal Bilimler Ä°lgisi": 3.5,
                    "Ä°kna Ä°lgisi": 3.0
                },
                vr_image: "",
                hasVRVideo: false,
                vrVideoFile: "",
                vrDescription: ""
            },
            {
                name: "DiÅŸ Hekimi",
                description: "AÄŸÄ±z ve diÅŸ saÄŸlÄ±ÄŸÄ± sorunlarÄ±nÄ± teÅŸhis eden ve tedavi eden saÄŸlÄ±k uzmanÄ±.",
                requirements: {
                    "GÃ¶z-El Koordinasyonu": 4.0,
                    "Fen Bilimleri Ä°lgisi": 3.5,
                    "SayÄ±sal Yetenek": 3.0,
                    "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi": 3.5
                },
                vr_image: "",
                hasVRVideo: false,
                vrVideoFile: "",
                vrDescription: ""
            },
            {
                name: "Polis Memuru",
                description: "Toplum gÃ¼venliÄŸini saÄŸlayan, suÃ§larÄ± Ã¶nleyen ve hukuku uygulayan kamu gÃ¶revlisi.",
                requirements: {
                    "GÃ¶z-El Koordinasyonu": 3.5,
                    "Åekil-Uzay YeteneÄŸi": 3.0,
                    "Sosyal YardÄ±m Ä°lgisi": 3.5,
                    "Mekanik Ä°lgi": 2.5
                },
                vr_image: "",
                hasVRVideo: false,
                vrVideoFile: "",
                vrDescription: ""
            },
            {
                name: "AÅŸÃ§Ä±",
                description: "Yemek hazÄ±rlayan, mutfak dÃ¼zenini saÄŸlayan ve yaratÄ±cÄ± tarifler geliÅŸtiren mutfak profesyoneli.",
                requirements: {
                    "GÃ¶z-El Koordinasyonu": 3.0,
                    "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi": 3.5,
                    "GÃ¼zel Sanatlar Ä°lgisi": 2.5,
                    "Ziraat Ä°lgisi": 2.0
                },
                vr_image: "",
                hasVRVideo: false,
                vrVideoFile: "",
                vrDescription: ""
            },
            {
                name: "Arkeolog",
                description: "GeÃ§miÅŸ uygarlÄ±klarÄ±n izlerini araÅŸtÄ±ran, kazÄ± Ã§alÄ±ÅŸmalarÄ± yapan bilim insanÄ±.",
                requirements: {
                    "Sosyal Bilimler Ä°lgisi": 4.0,
                    "Åekil-Uzay YeteneÄŸi": 3.0,
                    "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi": 3.0,
                    "Fen Bilimleri Ä°lgisi": 2.5
                },
                vr_image: "",
                hasVRVideo: false,
                vrVideoFile: "",
                vrDescription: ""
            }
        ];
        
        // Global variables
        let questions = [];
        let answers = {};
        let currentQuestionIndex = 0;
        let careers = [];
        let currentSimulation = null;
        let testResults = null;
        
        // VR Video Player variables
        let vrScene, vrCamera, vrRenderer, vrControls;
        let videoTexture, videoMaterial, sphereGeometry, sphereMesh;
        let isPlaying = false;
        let videoElement = null;

        // ABKÃ– Orijinal YapÄ±sÄ± - 4 Yetenek + 12 Ä°lgi AlanÄ± (Toplam 170 madde)
        const academicCategories = [
            // 4 YETENEK ALANI (44 madde)
            { name: "SÃ¶zel Yetenek", type: "yetenek", madde_sayisi: 12, questions: [] },
            { name: "SayÄ±sal Yetenek", type: "yetenek", madde_sayisi: 10, questions: [] },
            { name: "Åekil-Uzay YeteneÄŸi", type: "yetenek", madde_sayisi: 12, questions: [] },
            { name: "GÃ¶z-El Koordinasyonu", type: "yetenek", madde_sayisi: 10, questions: [] },
            
            // 12 Ä°LGÄ° ALANI (126 madde)
            { name: "Fen Bilimleri Ä°lgisi", type: "ilgi", madde_sayisi: 12, questions: [] },
            { name: "Sosyal Bilimler Ä°lgisi", type: "ilgi", madde_sayisi: 11, questions: [] },
            { name: "Ä°kna Ä°lgisi", type: "ilgi", madde_sayisi: 11, questions: [] },
            { name: "YabancÄ± Dil Ä°lgisi", type: "ilgi", madde_sayisi: 10, questions: [] },
            { name: "Ticaret Ä°lgisi", type: "ilgi", madde_sayisi: 10, questions: [] },
            { name: "Ziraat Ä°lgisi", type: "ilgi", madde_sayisi: 10, questions: [] },
            { name: "Mekanik Ä°lgi", type: "ilgi", madde_sayisi: 10, questions: [] },
            { name: "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi", type: "ilgi", madde_sayisi: 10, questions: [] },
            { name: "Edebiyat Ä°lgisi", type: "ilgi", madde_sayisi: 10, questions: [] },
            { name: "GÃ¼zel Sanatlar Ä°lgisi", type: "ilgi", madde_sayisi: 10, questions: [] },
            { name: "MÃ¼zik Ä°lgisi", type: "ilgi", madde_sayisi: 10, questions: [] },
            { name: "Sosyal YardÄ±m Ä°lgisi", type: "ilgi", madde_sayisi: 10, questions: [] }
        ];

        
            const protectedPages = new Set([
            'action-select',
            'test',
            'results',
            'vr-explore',
            'vr-simulation',
            'careers',
            'advisor-dashboard'
        ]);

        let pendingPage = null;
        let firebaseApp = null;
        let auth = null;
        let db = null;
        let authUser = null;
        let authReady = false;
        let currentUserRole = 'student';

        function normalizeUsername(username) {
            return username.trim().toLowerCase();
        }

        function isAuthenticated() {
            return Boolean(authUser);
        }

        function getCurrentUser() {
            return authUser?.displayName || authUser?.email || '';
        }

        function isAdvisor() {
            return isAuthenticated() && currentUserRole === 'advisor';
        }

        function setAuthMessage(message, type = 'info') {
            const messageEl = document.getElementById('auth-message');
            if (!messageEl) return;
            messageEl.textContent = message;
            messageEl.className = `auth-message ${type}`;
        }

        function getRoleForUsername(username) {
            const normalized = normalizeUsername(username);
            if (normalized.startsWith('advisor-') || normalized.startsWith('danisman-')) {
                return 'advisor';
            }
            return 'student';
        }

        function formatAuthEmail(username) {
            const normalized = normalizeUsername(username);
            return `${normalized}@gelecekrotasi.local`;
        }

        function initializeFirebase() {
            if (!window.firebase) {
                console.error('Firebase SDK not available.');
                setAuthMessage('Kimlik doÄŸrulama servisi yÃ¼klenemedi.', 'error');
                authReady = true;
                return;
            }

            // `firebaseConfig.js` normally calls `firebase.initializeApp(...)`.
            // Guard against double-initialization: initialize only if no app exists.
            try {
                if (!firebase.apps || firebase.apps.length === 0) {
                    if (typeof firebase.initializeApp === 'function') {
                        firebase.initializeApp(firebaseConfig);
                    }
                }
            } catch (e) {
                console.warn('Firebase init guard error:', e);
            }

            // Obtain primary app, auth and firestore instances
            try {
                firebaseApp = firebase.app();
            } catch (e) {
                console.warn('firebase.app() unavailable:', e);
                firebaseApp = null;
            }

            auth = firebase.auth ? firebase.auth() : null;
            db = firebase.firestore ? firebase.firestore() : null;

            if (auth && typeof auth.onAuthStateChanged === 'function') {
                auth.onAuthStateChanged(async user => {
                    authUser = user;
                    authReady = true;
                    if (user) {
                        await syncUserProfile(user);
                    }
                    updateAuthUI();
                    const activePage = getActivePageId();
                    if (!user && protectedPages.has(activePage)) {
                        showPage('home');
                    }
                });
            } else {
                // If auth not available, mark ready so guardPageAccess behaves sensibly
                authReady = true;
            }
        }

        async function syncUserProfile(user) {
            if (!db || !user) return;
            const userRef = db.collection('users').doc(user.uid);
            const snapshot = await userRef.get();
            if (snapshot.exists) {
                currentUserRole = snapshot.data().role || 'student';
                await userRef.set({
                    lastLoginAt: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
                return;
            }
            currentUserRole = getRoleForUsername(user.displayName || user.email || '');
            await userRef.set({
                username: user.displayName || '',
                role: currentUserRole,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastLoginAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
        }

        function showAuthTab(tabName) {
            document.querySelectorAll('.auth-tab').forEach(tab => {
                tab.classList.toggle('active', tab.dataset.authTab === tabName);
            });
            document.querySelectorAll('.auth-form').forEach(form => {
                form.classList.toggle('active', form.id === `${tabName}-form`);
            });
        }

        function updateAuthUI() {
            const loginBtn = document.getElementById('nav-login-btn');
            const registerBtn = document.getElementById('nav-register-btn');
            const logoutBtn = document.getElementById('nav-logout-btn');
            const userBadge = document.getElementById('nav-user');
            const usernameEl = document.getElementById('nav-username');
            const advisorLink = document.getElementById('nav-advisor-link');
            const loggedIn = isAuthenticated();

            if (loginBtn) loginBtn.classList.toggle('d-none', loggedIn);
            if (registerBtn) registerBtn.classList.toggle('d-none', loggedIn);
            if (logoutBtn) logoutBtn.classList.toggle('d-none', !loggedIn);
            if (userBadge) userBadge.classList.toggle('d-none', !loggedIn);
            if (usernameEl) usernameEl.textContent = loggedIn ? getCurrentUser() : '';
            if (advisorLink) advisorLink.classList.toggle('d-none', !isAdvisor());
        }

        async function registerUser(username, password) {
            if (!auth) {
                return { ok: false, message: 'Kimlik doÄŸrulama servisi yÃ¼klenemedi.' };
            }
            const trimmedUsername = username.trim();
            if (trimmedUsername.length < 3) {
                return { ok: false, message: 'KullanÄ±cÄ± adÄ± en az 3 karakter olmalÄ±dÄ±r.' };
            }
            if (password.length < 8) {
                return { ok: false, message: 'Åifre en az 8 karakter olmalÄ±dÄ±r.' };
            }
            try {
                const email = formatAuthEmail(trimmedUsername);
                const credentials = await auth.createUserWithEmailAndPassword(email, password);
                await credentials.user.updateProfile({ displayName: trimmedUsername });
                currentUserRole = getRoleForUsername(trimmedUsername);
                await db.collection('users').doc(credentials.user.uid).set({
                    username: trimmedUsername,
                    role: currentUserRole,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    lastLoginAt: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
                return { ok: true, message: 'HesabÄ±nÄ±z oluÅŸturuldu ve giriÅŸ yapÄ±ldÄ±.' };
            } catch (error) {
                console.error('Registration error:', error);
                return { ok: false, message: 'KayÄ±t sÄ±rasÄ±nda hata oluÅŸtu. LÃ¼tfen bilgilerinizi kontrol edin.' };
            }
        }

        async function loginUser(username, password) {
            if (!auth) {
                return { ok: false, message: 'Kimlik doÄŸrulama servisi yÃ¼klenemedi.' };
            }
            try {
                const email = formatAuthEmail(username);
                const credentials = await auth.signInWithEmailAndPassword(email, password);
                await syncUserProfile(credentials.user);
                return { ok: true, message: 'BaÅŸarÄ±yla giriÅŸ yaptÄ±nÄ±z.' };
            } catch (error) {
                console.error('Login error:', error);
                return { ok: false, message: 'KullanÄ±cÄ± adÄ± veya ÅŸifre hatalÄ±.' };
            }
        }

        function getActivePageId() {
            const activeSection = document.querySelector('.page-section.active');
            if (!activeSection) return 'home';
            return activeSection.id.replace('-page', '');
        }

        function logoutUser() {
            if (!auth) return;
            auth.signOut();
        }

        function guardPageAccess(pageId) {

    if (protectedPages.has(pageId) && !isAuthenticated()) {
        pendingPage = pageId;

        if (!authReady) {
            setAuthMessage('Kimlik doÄŸrulama servisi yÃ¼kleniyor...', 'info');
        } else {
            setAuthMessage('Bu sayfaya eriÅŸmek iÃ§in giriÅŸ yapmalÄ±sÄ±nÄ±z.', 'warning');
        }

        showAuthTab('login');
        return 'auth';
    }

    if (pageId === 'advisor-dashboard' && !isAdvisor()) {
        setAuthMessage('Bu sayfaya eriÅŸmek iÃ§in danÄ±ÅŸman hesabÄ± gerekir.', 'warning');
        return 'home';
    }

    if (pageId === 'auth' && isAuthenticated()) {
        setAuthMessage('Zaten giriÅŸ yaptÄ±nÄ±z.', 'success');
        return 'home'; // genelde auth'a tekrar girmesin diye home'a yÃ¶nlendirilir
    }

    return pageId;
}

        // Page navigation with smooth transitions
        function showPage(pageId) {
            const guardedPageId = guardPageAccess(pageId);
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show target page with animation
            setTimeout(() => {
                const targetPage = document.getElementById(guardedPageId + '-page');
                if (targetPage) {
                    targetPage.classList.add('active');
                    
                    // Initialize page-specific content
                    if (guardedPageId === 'test') {
                        initializeTest();
                    } else if (guardedPageId === 'careers') {
                        loadAllCareers();
                    } else if (guardedPageId === 'vr-explore') {
                        loadVRCareers();
                    } else if (guardedPageId === 'results') {
                        // Check if we have test results to display
                        if (window.testResults && window.testResults.categoryScores) {
                            displayExistingResults();
                        }
                    } else if (guardedPageId === 'advisor-dashboard') {
                        loadAdvisorDashboard();
                    } else if (guardedPageId === 'auth') {
                        const usernameInput = document.getElementById('login-username');
                        if (usernameInput) {
                            usernameInput.focus();
                        }
                    }
                }
            }, 100);
        }

        // Make functions globally accessible for HTML onclick attributes
        window.showPage = showPage;
        window.fillRandomly = fillRandomly;
        window.resetTest = resetTest;
        window.showCareerDetail = showCareerDetail;
        window.openVRSimulation = openVRSimulation;

        // Initialize application
        document.addEventListener('DOMContentLoaded', function() {
            // Suppress WebSocket errors from Live Preview
            window.addEventListener('error', function(e) {
                if (e.message.includes('WebSocket') || e.message.includes('favicon')) {
                    e.preventDefault();
                    return false;
                }
            });
            
            // Check if external libraries loaded
            checkLibraryAvailability();
            
            loadQuestions();
            loadCareers();
            loadAnswersFromStorage();
            
            // Add scroll animations
            addScrollAnimations();

            initializeFirebase();

            const loginBtn = document.getElementById('nav-login-btn');
            const registerBtn = document.getElementById('nav-register-btn');
            const logoutBtn = document.getElementById('nav-logout-btn');
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');

            if (loginBtn) {
                loginBtn.addEventListener('click', () => {
                    pendingPage = null;
                    setAuthMessage('');
                    showAuthTab('login');
                    showPage('auth');
                });
            }

            if (registerBtn) {
                registerBtn.addEventListener('click', () => {
                    pendingPage = null;
                    setAuthMessage('');
                    showAuthTab('register');
                    showPage('auth');
                });
            }

            if (logoutBtn) {
                logoutBtn.addEventListener('click', logoutUser);
            }

            document.querySelectorAll('.auth-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    setAuthMessage('');
                    showAuthTab(tab.dataset.authTab);
                });
            });

            if (loginForm) {
                loginForm.addEventListener('submit', async event => {
                    event.preventDefault();
                    const username = document.getElementById('login-username').value;
                    const password = document.getElementById('login-password').value;
                    const result = await loginUser(username, password);
                    setAuthMessage(result.message, result.ok ? 'success' : 'error');
                    if (result.ok) {
                        updateAuthUI();
                        pendingPage = null;
                        showPage('action-select');
                        const nextPage = pendingPage || 'home';
                        pendingPage = null;
                        showPage(nextPage);
                    }
                });
            }

            if (registerForm) {
                registerForm.addEventListener('submit', async event => {
                    event.preventDefault();
                    const username = document.getElementById('register-username').value;
                    const password = document.getElementById('register-password').value;
                    const result = await registerUser(username, password);
                    setAuthMessage(result.message, result.ok ? 'success' : 'error');
                    if (result.ok) {
                        updateAuthUI();
                        pendingPage = null;
                        showPage('action-select');
                        const nextPage = pendingPage || 'home';
                        pendingPage = null;
                        showPage(nextPage);
                    }
                });
            }

            updateAuthUI();
        });

        // Check if external libraries are available
        function checkLibraryAvailability() {
            const libraries = {
                'Three.js': typeof THREE !== 'undefined',
                'Chart.js': typeof Chart !== 'undefined',
                'YouTube API': typeof YT !== 'undefined',
                'Firebase': typeof firebase !== 'undefined'
            };
            
            console.log('Library availability:', libraries);
            
            // Show warning if libraries are missing
            const missingLibraries = Object.entries(libraries)
                .filter(([, available]) => !available)
                .map(([name]) => name);
            
            if (missingLibraries.length > 0) {
                console.warn('Missing libraries:', missingLibraries);
                // Add a subtle warning to the page
                const warning = document.createElement('div');
                warning.style.cssText = `
                    position: fixed;
                    top: 80px;
                    right: 20px;
                    background: rgba(255, 193, 7, 0.9);
                    color: #000;
                    padding: 10px 15px;
                    border-radius: 8px;
                    font-size: 0.8rem;
                    z-index: 1000;
                    max-width: 300px;
                `;
                warning.innerHTML = `
                    <i class="fas fa-exclamation-triangle"></i>
                    <strong>BazÄ± Ã¶zellikler yÃ¼klenemedi:</strong><br>
                    ${missingLibraries.join(', ')}<br>
                    <small>Ä°nternet baÄŸlantÄ±nÄ±zÄ± kontrol edin</small>
                `;
                document.body.appendChild(warning);
                
                // Remove warning after 5 seconds
                setTimeout(() => {
                    if (warning.parentNode) {
                        warning.parentNode.removeChild(warning);
                    }
                }, 5000);
            }
        }

        // Create sample questions if JSON file is not available
        function createSampleQuestions() {
            const questionsData = [
                { q: "Bir yazÄ± yazarken, bir Ã¶dev yaparken, yazÄ±m (imla) kurallarÄ±na dikkat eder misiniz?", cat: "SÃ¶zel Yetenek" },
                { q: "Bir hikaye kitabÄ±nÄ± hÄ±zlÄ± ve doÄŸru okuyabilir misiniz?", cat: "SÃ¶zel Yetenek" },
                { q: "Ã‡arpÄ±m tablosunu, bÃ¶lme iÅŸlemini kolay Ã¶ÄŸrenebildiniz mi?", cat: "SayÄ±sal Yetenek" },
                { q: "Birbirine Ã§ok benzeyen iki resmin arasÄ±ndaki kÃ¼Ã§Ã¼k farklarÄ± hemen gÃ¶rebilir misiniz?", cat: "Åekil-Uzay YeteneÄŸi" },
                { q: "Kelimeleri doÄŸru bir biÃ§imde yazabiliyor ve sÃ¶yleyebiliyor musunuz?", cat: "SÃ¶zel Yetenek" },
                { q: "Bir dairenin merkezini doÄŸru bir biÃ§imde tahmin ederek iÅŸaretleyebilir misiniz?", cat: "GÃ¶z-El Koordinasyonu" },
                { q: "Ä°ki Ã§izgi arsÄ±nda Ã§ok az bir uzunluk farkÄ± olduÄŸunda, bunu kolaylÄ±kla algÄ±layabilir misiniz?", cat: "GÃ¶z-El Koordinasyonu" },
                { q: "Bir parÃ§ayÄ± bir kere okuduktan sonra hemen Ã¶zetleyebiliyor musunuz?", cat: "SÃ¶zel Yetenek" },
                { q: "DÃ¶rt iÅŸlemle akÄ±ldan, hÄ±zlÄ± problem Ã§Ã¶zebilir misiniz?", cat: "SayÄ±sal Yetenek" },
                { q: "Bir doÄŸru parÃ§asÄ±nÄ±n kaÃ§ santimetre olduÄŸunu doÄŸru tahmin edebilir misiniz?", cat: "SayÄ±sal Yetenek" },
                { q: "Yeni duyduÄŸunuz kelimelerin anlamlarÄ±nÄ± Ã¶ÄŸrenmeye Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "SÃ¶zel Yetenek" },
                { q: "OkuduÄŸunuz bir parÃ§ada belirten fikirler arsÄ±nda iliÅŸki kurabiliyor musunuz?", cat: "SÃ¶zel Yetenek" },
                { q: "Bir matematik probleminin Ã§Ã¶zÃ¼m yolunu Ã¶ÄŸrendikten sonra, ona benzer problemleri Ã§Ã¶zebiliyor musunuz?", cat: "SayÄ±sal Yetenek" },
                { q: "Ä°lk defa gittiÄŸiniz binada yÃ¶nÃ¼nÃ¼zÃ¼ bulabiliyor musunuz?", cat: "Åekil-Uzay YeteneÄŸi" },
                { q: "Bir defa baÅŸkalarÄ± ile birlikte gittiÄŸiniz bir yeri, ikinci defa yalnÄ±z baÅŸÄ±na gittiÄŸinizde, kolaylÄ±kla bulabilir misiniz?", cat: "Åekil-Uzay YeteneÄŸi" },
                { q: "GeliÅŸigÃ¼zel parÃ§alarÄ± ayrÄ±lmÄ±ÅŸ bir ÅŸeklin veya cismin parÃ§alarÄ±nÄ± eski yerlerine kolaylÄ±kla yerleÅŸtirebilir misiniz?", cat: "Åekil-Uzay YeteneÄŸi" },
                { q: "Bir makinanÄ±n ÅŸemasÄ±na bakarak makineyi kurabilir misiniz?", cat: "Mekanik Ä°lgi" },
                { q: "AÃ§Ä±lmÄ±ÅŸ hali verilen geometrik bir cismin, kapandÄ±ÄŸÄ± zaman aÃ§Ä±lacaÄŸÄ± ÅŸekli gÃ¶z Ã¶nÃ¼nde canlandÄ±rabilir misiniz?", cat: "Åekil-Uzay YeteneÄŸi" },
                { q: "Bir konuda edindiÄŸiniz bilgileri, kendi sÃ¶zcÃ¼klerinizle baÅŸkalarÄ±na aktarabiliyor musunuz?", cat: "SÃ¶zel Yetenek" },
                { q: "Sizin dÃ¼zeyinizde bir matematik kitabÄ±nÄ± okuyarak bir problemin Ã§Ã¶zÃ¼m yolunu bulabiliyor musunuz?", cat: "SayÄ±sal Yetenek" },
                { q: "BoÅŸ zamanlarÄ±nÄ±zda, zevk iÃ§in matematik problemleri Ã§Ã¶zmeye Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "SayÄ±sal Yetenek" },
                { q: "Bir konuyu sÃ¶z ve yazÄ± ile anlatÄ±rken, fikirleri doÄŸru bir sÄ±ra ile verebiliyor musunuz?", cat: "SÃ¶zel Yetenek" },
                { q: "Matematik dersinde, Ã¶zel bir yardÄ±m (ders) almadan baÅŸarÄ±lÄ± olabiliyor musunuz?", cat: "SayÄ±sal Yetenek" },
                { q: "Bir yazÄ±daki fikir ve ifade hatalarÄ±nÄ± kolaylÄ±kla gÃ¶rebilir misiniz?", cat: "SÃ¶zel Yetenek" },
                { q: "BoÅŸ bir kesme ÅŸeker kutusu, kÄ±sa kenarlarÄ±ndan kesilip aÃ§Ä±lÄ±nca hangi yÃ¼zeyin nereye geleceÄŸini gÃ¶zÃ¶nÃ¼nde canlandÄ±rabilir misiniz?", cat: "Åekil-Uzay YeteneÄŸi" },
                { q: "Ã–ÄŸrendiÄŸiniz matematik kurallarÄ±na fen bilgisi derslerindeki problemlere uygulayabiliyor musunuz?", cat: "SayÄ±sal Yetenek" },
                { q: "Bir kaÄŸÄ±da, cetvel kullanmadan dÃ¼zgÃ¼n paralel Ã§izgiler Ã§izebiliyor musunuz?", cat: "GÃ¶z-El Koordinasyonu" },
                { q: "KarmaÅŸÄ±k bir geometrik ÅŸeklin, saÄŸa ve sola dÃ¶ndÃ¼rÃ¼lmesi ile alacaÄŸÄ± durumu gÃ¶zÃ¶nÃ¼nde canlandÄ±rabilir misiniz?", cat: "Åekil-Uzay YeteneÄŸi" },
                { q: "Bir problemin, size Ã¶ÄŸretilen Ã§Ã¶zÃ¼m yollarÄ±ndan farklÄ± Ã§Ã¶zÃ¼m yollarÄ±nÄ± bulabilir misiniz?", cat: "SayÄ±sal Yetenek" },
                { q: "AkÄ±cÄ± bir Ã¼slupla gÃ¼zel yazÄ± (Ã¶rneÄŸin bir mektup) yazabilir misiniz?", cat: "SÃ¶zel Yetenek" },
                { q: "OkuduÄŸunuz bir parÃ§ada anlatÄ±lan fikirleri bulup Ã¶zetleyebiliyor musunuz?", cat: "SÃ¶zel Yetenek" },
                { q: "Sizin dÃ¼zeyinde, ama daha Ã¶nce hiÃ§ gÃ¶rmediÄŸiniz bir matematik kitabÄ±nÄ± rahatlÄ±kla okuyabilir misiniz?", cat: "SayÄ±sal Yetenek" },
                { q: "Bir evin planÄ±na baktÄ±ÄŸÄ±nÄ±zda, evin yapÄ±lmÄ±ÅŸ halini gÃ¶zÃ¶nÃ¼nde canlandÄ±rabilir misiniz?", cat: "Åekil-Uzay YeteneÄŸi" },
                { q: "Bir kaÄŸÄ±da Ã§izilen yÄ±ldÄ±z biÃ§imindeki bir ÅŸekli makasla, dÃ¼zgÃ¼n bir biÃ§imde kesip Ã§Ä±karabilir misiniz?", cat: "GÃ¶z-El Koordinasyonu" },
                { q: "Alet kullanmadan dÃ¼zgÃ¼n geometrik ÅŸekiller Ã§izebilir misiniz?", cat: "GÃ¶z-El Koordinasyonu" },
                { q: "AttÄ±ÄŸÄ±nÄ±z bir bilyeyi veya bir taÅŸÄ± istediÄŸiniz hedefe gÃ¶nderebilir misiniz?", cat: "GÃ¶z-El Koordinasyonu" },
                { q: "SatranÃ§ Ã¶ÄŸrenmek iÃ§in Ã§aba sarfediyor musunuz?", cat: "Mekanik Ä°lgi" },
                { q: "Fen dersleri ile ilgili konularÄ± kolay Ã¶ÄŸrenebiliyor musunuz?", cat: "Fen Bilimleri Ä°lgisi" },
                { q: "Desenli kaÄŸÄ±tlarÄ±, ÅŸekilleri birbirine tamamlayacak ÅŸekilde, yanyana yapÄ±ÅŸtÄ±rabilir misiniz?", cat: "Åekil-Uzay YeteneÄŸi" },
                { q: "Bir aletin (Ã¶rneÄŸin, saatin) Ã§ok kÃ¼Ã§Ã¼k bir parÃ§asÄ±nÄ± (vidasÄ±nÄ±) yerine kolayca yerleÅŸtirebilir misiniz?", cat: "GÃ¶z-El Koordinasyonu" },
                { q: "Gelecekte kendinizi, laboratuarda araÅŸtÄ±rmacÄ± olarak dÃ¼ÅŸlediÄŸiniz oldumu?", cat: "Fen Bilimleri Ä°lgisi" },
                { q: "Bir kente gittiÄŸinizde, mÃ¼zeleri, tarihi yerleri gezer misiniz?", cat: "Sosyal Bilimler Ä°lgisi" },
                { q: "Ã‡eÅŸitli atasÃ¶zlerinin ve Ã¶zdeyiÅŸlerin nereden Ã§Ä±ktÄ±ÄŸÄ±nÄ± araÅŸtÄ±rmak ister misiniz?", cat: "Edebiyat Ä°lgisi" },
                { q: "Ä°nsanlarÄ±n ne dÃ¼ÅŸÃ¼ndÃ¼klerini ve ne hissettiklerini incelemekten hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Sosyal Bilimler Ä°lgisi" },
                { q: "Fen derslerinde Ã¶ÄŸrendiÄŸiniz ilke ve kurallarÄ± evinizdeki sorunlarÄ±n Ã§Ã¶zÃ¼mÃ¼nde kullanÄ±r mÄ±sÄ±nÄ±z?", cat: "Fen Bilimleri Ä°lgisi" },
                { q: "Fen dersleri ile ilgili konularda sÄ±nÄ±fta Ã¶ÄŸretilenlerden daha fazla bilgi edinmek iÃ§in baÅŸka kaynaklara baÅŸvurduÄŸunuz oluyor mu?", cat: "Fen Bilimleri Ä°lgisi" },
                { q: "Evcil hayvanlarÄ±n veya bitkilerin geliÅŸmelerini incelemekten hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Fen Bilimleri Ä°lgisi" },
                { q: "Yeni Ã¶ÄŸrendiÄŸiniz yabancÄ± dildeki sÃ¶zcÃ¼kleri bir cÃ¼mlede kullanmaya Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "YabancÄ± Dil Ä°lgisi" },
                { q: "Fen bilgisi ile ilgili problemleri Ã§Ã¶zmekten hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Fen Bilimleri Ä°lgisi" },
                { q: "Deniz dibindeki hayatÄ± gÃ¶steren bir filmi ilgi ve dikkatle izler misiniz?", cat: "Fen Bilimleri Ä°lgisi" },
                { q: "YabancÄ± dildeki kelimeleri kolaylÄ±kla ezberleyebiliyor musunuz?", cat: "YabancÄ± Dil Ä°lgisi" },
                { q: "Bir bilyeyi, baÅŸka bir bilye ile vurarak, istediÄŸiniz hedefe gÃ¶nderebilir misiniz?", cat: "GÃ¶z-El Koordinasyonu" },
                { q: "BÃ¼yÃ¼k coÄŸrafya keÅŸiflerini anlatan bir televizyon dizisini izlemekten hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Sosyal Bilimler Ä°lgisi" },
                { q: "Tarih ve coÄŸrafya derslerinde okutulan konularÄ± kolay Ã¶ÄŸrenebiliyor musunuz?", cat: "Sosyal Bilimler Ä°lgisi" },
                { q: "Bilimsel proje sergilerini gezer misiniz?", cat: "Fen Bilimleri Ä°lgisi" },
                { q: "Ä°nsanlarÄ±n gazetelerde hangi haberleri merakla okuduklarÄ±nÄ± araÅŸtÄ±rmak ister misiniz?", cat: "Sosyal Bilimler Ä°lgisi" },
                { q: "Tarih romanlarÄ± okumaktan hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Edebiyat Ä°lgisi" },
                { q: "Televizyonda bilimsel buluÅŸlarÄ± anlatan belgesel programlarÄ± izler misiniz?", cat: "Fen Bilimleri Ä°lgisi" },
                { q: "ÃœnlÃ¼ bilim adamlarÄ±nÄ±n hayatÄ±nÄ± anlatan televizyon dizilerini izler misiniz?", cat: "Fen Bilimleri Ä°lgisi" },
                { q: "Bir pastayÄ± veya bÃ¶reÄŸi, eÅŸit olarak ve dÃ¼zgÃ¼n biÃ§imde kesebilir misiniz?", cat: "GÃ¶z-El Koordinasyonu" },
                { q: "Ã‡ocuklarda yaratÄ±cÄ±lÄ±k baÅŸlÄ±klÄ± bir makaleyi okumak ister misiniz?", cat: "Sosyal Bilimler Ä°lgisi" },
                { q: "Ã‡evrenizdeki insanlarÄ±n davranÄ±ÅŸlarÄ±nÄ±n nedenlerini merak edip araÅŸtÄ±rÄ±r mÄ±sÄ±nÄ±z?", cat: "Sosyal Bilimler Ä°lgisi" },
                { q: "Uzay araÃ§larÄ±nÄ±n, roketlerin evrimini gÃ¶steren bir sergiyi izlemek ister misiniz?", cat: "Fen Bilimleri Ä°lgisi" },
                { q: "ÃœnlÃ¼ toplum liderlerinin hayatÄ±nÄ± anlatan eserleri okumak veya filmleri izlemek ister misiniz?", cat: "Sosyal Bilimler Ä°lgisi" },
                { q: "Ä°nsan haklarÄ± konulu bir Ã¶dev hazÄ±rlayÄ±p sÄ±nÄ±fta sunmak ister misiniz?", cat: "Ä°kna Ä°lgisi" },
                { q: "KÃ¼Ã§Ã¼k bir deliÄŸe, ince bir Ã§ubuÄŸu, deliÄŸin kenarÄ±na deÄŸdirmeden sokabilir misiniz?", cat: "GÃ¶z-El Koordinasyonu" },
                { q: "KÃ¼Ã§Ã¼k bir ÅŸeklin iÃ§ini, dÄ±ÅŸarÄ± taÅŸÄ±rmadan sulu boya ile boyayabilir misiniz?", cat: "GÃ¶z-El Koordinasyonu" },
                { q: "Orta Asya'daki eski uygarlÄ±k eserlerini gÃ¶steren bir belgesel filmi izlemekten hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Sosyal Bilimler Ä°lgisi" },
                { q: "Evinizde ipekbÃ¶ceÄŸi yetiÅŸtirip bakÄ±mÄ±nÄ± Ã¼stlenebilir misiniz?", cat: "Ziraat Ä°lgisi" },
                { q: "KapÄ± zili, kilit gibi ev aletlerini onarmaya Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "Mekanik Ä°lgi" },
                { q: "Tahtadan veya metalden oyuncaklar yapabilir misiniz?", cat: "Mekanik Ä°lgi" },
                { q: "Yeni Ã§iÃ§ek tÃ¼rleri yetiÅŸtirmeyi denemek ister misiniz?", cat: "Ziraat Ä°lgisi" },
                { q: "Bir yabancÄ± turistle, bildiÄŸiniz yabancÄ± dille konuÅŸmaya Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "YabancÄ± Dil Ä°lgisi" },
                { q: "Gelecekte yabancÄ± dilinizi ilerletip o dilde yazÄ±lmÄ±ÅŸ dergi ve kitaplarÄ± okumayÄ± dÃ¼ÅŸÃ¼nÃ¼r mÃ¼sÃ¼nÃ¼z?", cat: "YabancÄ± Dil Ä°lgisi" },
                { q: "Hayvanat bahÃ§esine getirilen hayvanlarÄ±n yeni Ã§evreye uyum sorunlarÄ± konulu bir belgesel filmi ilgi ile izler misiniz?", cat: "Ziraat Ä°lgisi" },
                { q: "Bir Ã§iftliÄŸin yÃ¶neticisi olmayÄ± dÃ¼ÅŸÃ¼nÃ¼r mÃ¼sÃ¼nÃ¼z?", cat: "Ziraat Ä°lgisi" },
                { q: "Yeni Ã¶ÄŸrendiÄŸiniz yabancÄ± dildeki sÃ¶zcÃ¼kleri doÄŸru biÃ§imde sÃ¶ylemeye gayret eder misiniz?", cat: "YabancÄ± Dil Ä°lgisi" },
                { q: "Kaliteli meyve yetiÅŸtiren bir Ã¼retici olmayÄ± dÃ¼ÅŸÃ¼nÃ¼r mÃ¼sÃ¼nÃ¼z?", cat: "Ziraat Ä°lgisi" },
                { q: "Bir aleti parÃ§alara ayÄ±rÄ±p tekrar birleÅŸtirebilir misiniz?", cat: "Mekanik Ä°lgi" },
                { q: "Evcil hayvanlarÄ±n hangi koÅŸullarda ve ortamda daha iyi geliÅŸtiklerini incelemekten hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Ziraat Ä°lgisi" },
                { q: "Yeni bir alet veya makine ile karÅŸÄ±laÅŸtÄ±ÄŸÄ±nÄ±zda, hemen onun nasÄ±l Ã§alÄ±ÅŸtÄ±ÄŸÄ±nÄ± Ã¶ÄŸrenmeye Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "Mekanik Ä°lgi" },
                { q: "Evde bir hayvan (kuÅŸ) besler, bakÄ±mÄ±nÄ± yapar mÄ±sÄ±nÄ±z?", cat: "Ziraat Ä°lgisi" },
                { q: "SaksÄ±da ve bahÃ§ede Ã§iÃ§ek yetiÅŸtirip bakÄ±mÄ±nÄ± Ã¼stlenir misiniz?", cat: "Ziraat Ä°lgisi" },
                { q: "Elektrikli aletlerin nasÄ±l iÅŸlediklerini inceler misiniz?", cat: "Mekanik Ä°lgi" },
                { q: "Havuzlarda balÄ±k Ã¼retme yÃ¶ntemlerini gÃ¶steren bir filmi ilgi ile izler misiniz?", cat: "Ziraat Ä°lgisi" },
                { q: "Her tÃ¼rlÃ¼ araÃ§ ve gereÃ§ saÄŸlansa, bir kafes yapmayÄ± dener misiniz?", cat: "Mekanik Ä°lgi" },
                { q: "Ä°nanÃ§ ve dÃ¼ÅŸÃ¼ncelerinizi baÅŸkalarÄ±na kolaylÄ±kla aktarabilir misiniz?", cat: "Ä°kna Ä°lgisi" },
                { q: "TartÄ±ÅŸmalarda gÃ¼Ã§lÃ¼ kanÄ±tlar bularak, gÃ¶rÃ¼ÅŸÃ¼nÃ¼zÃ¼ karÅŸÄ±nÄ±zdakilere kabul ettirebilir misiniz?", cat: "Ä°kna Ä°lgisi" },
                { q: "BelleÄŸiniz kuvvetli midir?", cat: "SÃ¶zel Yetenek" },
                { q: "Ä°nsanlarÄ±n daha Ã§ok hangi mallarÄ± almak istediklerini Ã¶ÄŸrenmeye Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "Ticaret Ä°lgisi" },
                { q: "Model uÃ§ak yapmaya Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "Mekanik Ä°lgi" },
                { q: "ArkadaÅŸlarÄ±nÄ±z arasÄ±ndaki Ã§atÄ±ÅŸmalarÄ±n Ã§Ã¶zÃ¼mÃ¼nde arabuluculuk yapar mÄ±sÄ±nÄ±z?", cat: "Ä°kna Ä°lgisi" },
                { q: "Bir yazÄ±daki hatalarÄ± dÃ¼zeltmekten, bir hesabÄ± kontrol etmekten hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi" },
                { q: "YaptÄ±ÄŸÄ±nÄ±z herhangi bir iÅŸin temiz ve Ã¶zenli olmasÄ± iÃ§in gereken Ã¶zeni gÃ¶sterir misiniz?", cat: "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi" },
                { q: "Bir makinanÄ±n, Ã¶rneÄŸin bir elektrik motorunun, evrimini gÃ¶steren bir sergiyi gezmek ister misiniz?", cat: "Mekanik Ä°lgi" },
                { q: "Ã‡evrenizde HazÄ±rcevap bir kiÅŸi olarak tanÄ±nÄ±r mÄ±sÄ±nÄ±z?", cat: "Ä°kna Ä°lgisi" },
                { q: "Okul kantini ya da kooperatifini yÃ¶netmek ister misiniz?", cat: "Ticaret Ä°lgisi" },
                { q: "Bir iÅŸin ince ayrÄ±ntÄ±larÄ± ile uÄŸraÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi" },
                { q: "ParanÄ±zÄ± nerelerde harcadÄ±ÄŸÄ±nÄ±zÄ±n kaydÄ±nÄ± tutar mÄ±sÄ±nÄ±z?", cat: "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi" },
                { q: "AnÄ±larÄ±nÄ±zÄ± yazar mÄ±sÄ±nÄ±z?", cat: "Edebiyat Ä°lgisi" },
                { q: "Yaz aylarÄ±nda bir dÃ¼kkanda ya da ticarethanede Ã§alÄ±ÅŸmak ister misiniz?", cat: "Ticaret Ä°lgisi" },
                { q: "Derslerinize gÃ¼nÃ¼ gÃ¼nÃ¼ne Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi" },
                { q: "Okulda ÅŸiir okuma yarÄ±ÅŸmalarÄ± dÃ¼zenleyen bir grubun Ã¼yesi olmak ister misiniz?", cat: "Edebiyat Ä°lgisi" },
                { q: "MektuplarÄ±nÄ±zÄ± eski okul karnelerinizi tarih sÄ±rasÄ±na koyup saklar mÄ±sÄ±nÄ±z?", cat: "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi" },
                { q: "AldÄ±ÄŸÄ±nÄ±z her ÅŸeyin ya da yaptÄ±ÄŸÄ±nÄ±z her iÅŸin dÃ¼zenli bir biÃ§imde kaydÄ±nÄ± tutar mÄ±sÄ±nÄ±z?", cat: "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi" },
                { q: "YabancÄ± dil kurslarÄ±na gitmek ister misiniz?", cat: "YabancÄ± Dil Ä°lgisi" },
                { q: "Bir makinanÄ±n Ã§alÄ±ÅŸmasÄ±nÄ± geliÅŸtirici yÃ¶ntemler dÃ¼ÅŸÃ¼nÃ¼r mÃ¼sÃ¼nÃ¼z?", cat: "Mekanik Ä°lgi" },
                { q: "SÃ¶z ve davranÄ±ÅŸlarÄ±nÄ±zÄ±n baÅŸkalarÄ± Ã¼zerindeki etkilerini Ã¶ÄŸrenmeye Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "Ä°kna Ä°lgisi" },
                { q: "KonuÅŸurken Ã§evrenizdeki insanlarÄ±n ilgisini Ã§ekebilir ve gÃ¶rÃ¼ÅŸlerinizi onlara kabul ettirebilir misiniz?", cat: "Ä°kna Ä°lgisi" },
                { q: "Televizyondaki reklamlarÄ±n daha iyi nasÄ±l yapÄ±labileceÄŸi Ã¼zerinde araÅŸtÄ±rma yapan bir grubun iÃ§inde yer almak ister misiniz?", cat: "Ticaret Ä°lgisi" },
                { q: "Evleri dolaÅŸÄ±p bir malÄ±n tanÄ±tÄ±mÄ±nÄ± yapmaktan hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Ticaret Ä°lgisi" },
                { q: "Ã–devlerinizi zamanÄ±nda ve dÃ¼zgÃ¼n biÃ§imde yapar mÄ±sÄ±nÄ±z?", cat: "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi" },
                { q: "Televizyonda veya radyoda ÅŸiir saatlerini izler misiniz?", cat: "Edebiyat Ä°lgisi" },
                { q: "Kendini gelecekte bir yazar olarak dÃ¼ÅŸlediÄŸiniz olur mu?", cat: "Edebiyat Ä°lgisi" },
                { q: "YaptÄ±ÄŸÄ±nÄ±z her hangi bir ÅŸeyi Ã¶zenle sÃ¼sler misiniz?", cat: "GÃ¼zel Sanatlar Ä°lgisi" },
                { q: "KÃ¼Ã§Ã¼k hikayeler yazmayÄ± dener misiniz?", cat: "Edebiyat Ä°lgisi" },
                { q: "ÃœnlÃ¼ sanatÃ§Ä±larÄ±n, ressamlarÄ±n hayatÄ±nÄ± merak eder misiniz?", cat: "GÃ¼zel Sanatlar Ä°lgisi" },
                { q: "Ã‡evrenizdeki Ã§eÅŸitli makinalarÄ±n bakÄ±mÄ±nÄ± yapar, onlarÄ± bozmadan kullanabilir misiniz?", cat: "Mekanik Ä°lgi" },
                { q: "Sizin gibi dÃ¼ÅŸÃ¼nmeyen insanlarÄ± ikna etmek iÃ§in uzun tartÄ±ÅŸmalara girer misiniz?", cat: "Ä°kna Ä°lgisi" },
                { q: "Ã‡evrenizdeki eÅŸyalarÄ±n, Ã¼rÃ¼nlerin, satÄ±lsalar kaÃ§ lira edeceklerini dÃ¼ÅŸÃ¼nÃ¼r mÃ¼sÃ¼nÃ¼z?", cat: "Ticaret Ä°lgisi" },
                { q: "EÅŸyalarÄ±nÄ±zÄ± yerli yerine koyar, Ã§evrenizi dÃ¼zenli tutar mÄ±sÄ±nÄ±z?", cat: "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi" },
                { q: "Bir malÄ± satmak iÃ§in neler yapmak gerektiÄŸini Ã¶ÄŸreten bir kursa katÄ±lmak ister misiniz?", cat: "Ticaret Ä°lgisi" },
                { q: "Gazete, boÅŸ ÅŸiÅŸe gibi kullanÄ±lmÄ±ÅŸ ÅŸeyleri satarak para kazanmayÄ± dÃ¼ÅŸÃ¼nÃ¼r mÃ¼sÃ¼nÃ¼z?", cat: "Ticaret Ä°lgisi" },
                { q: "YabancÄ± dilde ÅŸarkÄ± sÃ¶ylemeye Ã¶zenir misiniz?", cat: "YabancÄ± Dil Ä°lgisi" },
                { q: "MektuplarÄ± zamanÄ±nda cevaplandÄ±rÄ±r mÄ±sÄ±nÄ±z?", cat: "Ä°ÅŸ AyrÄ±ntÄ±larÄ± Ä°lgisi" },
                { q: "Bir ÅŸeyi satÄ±n alacaÄŸÄ±nÄ±z zaman Ã§eÅŸitli dÃ¼kkanlarÄ± dolaÅŸÄ±p fiyatlarÄ± karÅŸÄ±laÅŸtÄ±rarak gereÄŸini duyar mÄ±sÄ±nÄ±z?", cat: "Ticaret Ä°lgisi" },
                { q: "Bir aleti, tarifesine ve ÅŸemasÄ±na bakarak Ã§alÄ±ÅŸtÄ±rabilir misiniz?", cat: "Mekanik Ä°lgi" },
                { q: "GÃ¼zel konuÅŸma ve baÅŸkalarÄ±nÄ± ikna edebilme gÃ¼cÃ¼nÃ¼ geliÅŸtirici kurslara katÄ±lmak ister misiniz?", cat: "Ä°kna Ä°lgisi" },
                { q: "ArkadaÅŸlarÄ±nÄ±za ciklet, Ã§ikolata, bilye vb. ÅŸeyler sattÄ±nÄ±z mÄ±?", cat: "Ticaret Ä°lgisi" },
                { q: "Gelecekte kendinizi bir tÃ¼ccar olarak dÃ¼ÅŸlediÄŸiniz olur mu?", cat: "Ticaret Ä°lgisi" },
                { q: "Roman, hikaye veya ÅŸiir okur musunuz?", cat: "Edebiyat Ä°lgisi" },
                { q: "BoÅŸ vakitlerinizde Ã§iÃ§ek, nakÄ±ÅŸ, resim, heykel vb. yapar mÄ±sÄ±nÄ±z?", cat: "GÃ¼zel Sanatlar Ä°lgisi" },
                { q: "Radyo ve televizyonda mÃ¼zik programlarÄ±nÄ± izler misiniz?", cat: "MÃ¼zik Ä°lgisi" },
                { q: "MÃ¼zik yarÄ±ÅŸmalarÄ±na katÄ±lmak ister misiniz?", cat: "MÃ¼zik Ä°lgisi" },
                { q: "Televizyonda resim sanatÄ± ile ilgili haberleri ilgi ile izler misiniz?", cat: "GÃ¼zel Sanatlar Ä°lgisi" },
                { q: "GittiÄŸiniz bir kentte sanat galerilerini, resim sergilerini gezmek ister misiniz?", cat: "GÃ¼zel Sanatlar Ä°lgisi" },
                { q: "AÄŸlayan bir Ã§ocuÄŸu oyalayabilir misiniz?", cat: "Sosyal YardÄ±m Ä°lgisi" },
                { q: "YaÅŸlÄ±lar yurdunda eÄŸlence gÃ¼nleri dÃ¼zenlemekten hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Sosyal YardÄ±m Ä°lgisi" },
                { q: "BaÅŸkalarÄ±na kiÅŸisel sorunlarÄ±n Ã§Ã¶zÃ¼mÃ¼nde yardÄ±mcÄ± olabiliyor musunuz?", cat: "Sosyal YardÄ±m Ä°lgisi" },
                { q: "Ã‡ocuk gÃ¼rÃ¼ltÃ¼sÃ¼ne katlanabilir misiniz?", cat: "Sosyal YardÄ±m Ä°lgisi" },
                { q: "Belli bir anda pek Ã§ok ÅŸeye birden dikkat edebilir misiniz?", cat: "SÃ¶zel Yetenek" },
                { q: "Kompozisyon derslerinde baÅŸarÄ±lÄ± mÄ±sÄ±nÄ±z?", cat: "Edebiyat Ä°lgisi" },
                { q: "Okul gazetesine yazÄ± yazar mÄ±sÄ±nÄ±z?", cat: "Edebiyat Ä°lgisi" },
                { q: "MÃ¼zik dersleri alÄ±yor musunuz veya almak ister misiniz?", cat: "MÃ¼zik Ä°lgisi" },
                { q: "Bir mÃ¼zik aleti Ã§alar mÄ±sÄ±nÄ±z?", cat: "MÃ¼zik Ä°lgisi" },
                { q: "Bir hastaya bakabilir, ilaÃ§larÄ±nÄ± zamanÄ±nda verebilir misiniz?", cat: "Sosyal YardÄ±m Ä°lgisi" },
                { q: "Resim ve mimarlÄ±k sanatÄ±nÄ±n geliÅŸimini anlatan bir kitabÄ± zevkle okur musunuz?", cat: "GÃ¼zel Sanatlar Ä°lgisi" },
                { q: "Bir hastanede, yaz aylarÄ±nda gÃ¶nÃ¼llÃ¼ olarak Ã§alÄ±ÅŸmak ister misiniz?", cat: "Sosyal YardÄ±m Ä°lgisi" },
                { q: "BoÅŸ vakitlerinizi resim veya el iÅŸleri yaparak geÃ§irmeye Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "GÃ¼zel Sanatlar Ä°lgisi" },
                { q: "KonuÅŸtuÄŸunuz zaman kendinizi Ã§evrenizdeki insanlara dinletebiliyor musunuz?", cat: "Ä°kna Ä°lgisi" },
                { q: "KarÅŸÄ±nÄ±zdaki insanlarÄ±n ne dÃ¼ÅŸÃ¼ndÃ¼kleri ve ne hissettiklerini anlayabilir misiniz?", cat: "Sosyal YardÄ±m Ä°lgisi" },
                { q: "MÃ¼zik aletleri sergisini gezmek ister misiniz?", cat: "MÃ¼zik Ä°lgisi" },
                { q: "Ã‡eÅŸitli Ã¼lkelerin halk ÅŸarkÄ±larÄ±nÄ± tanÄ±tan bir program izler misiniz?", cat: "MÃ¼zik Ä°lgisi" },
                { q: "Hastalar ve yaÅŸlÄ±lara kitap okumaktan hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Sosyal YardÄ±m Ä°lgisi" },
                { q: "KÃ¼Ã§Ã¼k Ã§ocuklara oyun Ã¶ÄŸretmekten, onlara ÅŸarkÄ± sÃ¶ylemekten hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Sosyal YardÄ±m Ä°lgisi" },
                { q: "Ä°mkanlarÄ±nÄ±z Ã¶lÃ§Ã¼sÃ¼nde konserlere gitmeye Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "MÃ¼zik Ä°lgisi" },
                { q: "YabancÄ± dil dersinde baÅŸarÄ±lÄ± mÄ±sÄ±nÄ±z?", cat: "YabancÄ± Dil Ä°lgisi" },
                { q: "Ayakta ve hareketli olarak Ã§alÄ±ÅŸmaktan hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Sosyal YardÄ±m Ä°lgisi" },
                { q: "Ufak tefek besteler yapmaya Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "MÃ¼zik Ä°lgisi" },
                { q: "Bir evi ya da salonu sÃ¼slemekten hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "GÃ¼zel Sanatlar Ä°lgisi" },
                { q: "BaÅŸkalarÄ±na dinletecek dÃ¼zeyde bir mÃ¼zik aleti Ã§alÄ±yor musunuz?", cat: "MÃ¼zik Ä°lgisi" },
                { q: "OdanÄ±zÄ±, yaptÄ±ÄŸÄ±nÄ±z resim veya el iÅŸleri ile sÃ¼sler misiniz?", cat: "GÃ¼zel Sanatlar Ä°lgisi" },
                { q: "El sanatlarÄ± ya da resim kurslarÄ±na gitmek ister misiniz?", cat: "GÃ¼zel Sanatlar Ä°lgisi" },
                { q: "Yeni duyduÄŸunuz bir mÃ¼zik parÃ§asÄ±nÄ± Ã§almaya veya sÃ¶ylemeye Ã§alÄ±ÅŸÄ±r mÄ±sÄ±nÄ±z?", cat: "MÃ¼zik Ä°lgisi" },
                { q: "Gazete ve dergilerdeki edebiyat sÃ¼tunlarÄ±nÄ± okur musunuz?", cat: "Edebiyat Ä°lgisi" },
                { q: "Okul kitaplÄ±ÄŸÄ±na gider ve kitap alÄ±r mÄ±sÄ±nÄ±z?", cat: "Edebiyat Ä°lgisi" },
                { q: "Dilbilgisi kurallarÄ±nÄ± Ã¶ÄŸrenip uygulayabiliyor musunuz?", cat: "SÃ¶zel Yetenek" },
                { q: "GÃ¶rÃ¼ÅŸlerinize karÅŸÄ± Ã§Ä±kÄ±ldÄ±ÄŸÄ±nda bunu soÄŸukkanlÄ±lÄ±kla karÅŸÄ±lar mÄ±sÄ±nÄ±z?", cat: "Sosyal YardÄ±m Ä°lgisi" },
                { q: "AÃ§Ä±k havada Ã§alÄ±ÅŸmaktan hoÅŸlanÄ±r mÄ±sÄ±nÄ±z?", cat: "Sosyal YardÄ±m Ä°lgisi" },
                { q: "Gelecekte kendinizi Ã§eÅŸitli dillerin yapÄ± ve Ã¶zellikleri Ã¼zerinde Ã§alÄ±ÅŸan bir araÅŸtÄ±rmacÄ± olarak dÃ¼ÅŸÃ¼nebilir misiniz?", cat: "YabancÄ± Dil Ä°lgisi" }
            ];
            
            questions = [];
            questionsData.forEach((item, index) => {
                questions.push({
                    id: index + 1,
                    question: item.q,
                    category: item.cat
                });
            });
        }

        // Load careers data
        function loadCareers() {
            // Use imported career data
            careers = careerData.map((career, index) => ({
                id: index + 1,
                name: career.name,
                summary: career.description,
                description: career.description,
                icon: 'fas fa-briefcase', // Default icon
                color: 'primary', // Default color
                requirements: career.requirements,
                vrDescription: career.vrDescription || `${career.name} mesleÄŸini VR ile deneyimleyin!`,
                illustration: career.vr_image,
                hasVRVideo: career.hasVRVideo || false,
                vrVideoFile: career.vrVideoFile || null
            }));
        }

        // Initialize test
        function initializeTest() {
            currentQuestionIndex = 0;
            if (questions.length > 0) {
                displayQuestion();
                updateProgress();
            }
            
            // Remove existing event listeners first to prevent duplicates
            document.querySelectorAll('.answer-btn').forEach(btn => {
                btn.replaceWith(btn.cloneNode(true));
            });
            
            // Add answer button event listeners (only once)
            document.querySelectorAll('.answer-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    if (this.classList.contains('processing')) return; // Prevent double clicks
                    this.classList.add('processing');
                    
                    setTimeout(() => {
                        this.classList.remove('processing');
                    }, 600);
                    
                    selectAnswer(parseInt(this.dataset.value));
                });
            });
        }

        // Display current question
        function displayQuestion() {
            if (currentQuestionIndex >= questions.length) {
                finishTest();
                return;
            }
            
            const question = questions[currentQuestionIndex];
            document.getElementById('question-text').textContent = question.question;
            
            // Clear previous selections
            document.querySelectorAll('.answer-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Show previous answer if exists
            if (answers[question.id]) {
                const selectedBtn = document.querySelector(`[data-value="${answers[question.id].value}"]`);
                if (selectedBtn) {
                    selectedBtn.classList.add('selected');
                }
            }
        }

        // Select answer
        function selectAnswer(value) {
            // Prevent multiple calls
            if (selectAnswer.isProcessing) return;
            selectAnswer.isProcessing = true;
            
            const question = questions[currentQuestionIndex];
            
            // Validate question exists
            if (!question || currentQuestionIndex >= questions.length) {
                selectAnswer.isProcessing = false;
                return;
            }
            
            // Save answer
            answers[question.id] = {
                value: value,
                category: question.category
            };
            
            // Update UI
            document.querySelectorAll('.answer-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            const selectedBtn = document.querySelector(`[data-value="${value}"]`);
            if (selectedBtn) {
                selectedBtn.classList.add('selected');
            }
            
            // Save to localStorage
            localStorage.setItem('abko_answers', JSON.stringify(answers));
            
            // Move to next question after a short delay
            setTimeout(() => {
                currentQuestionIndex++;
                displayQuestion();
                updateProgress();
                selectAnswer.isProcessing = false;
            }, 500);
        }

        // Update progress bar
        function updateProgress() {
            const progress = ((currentQuestionIndex) / questions.length) * 100;
            document.getElementById('test-progress').style.width = progress + '%';
            document.getElementById('progress-text').textContent = `${currentQuestionIndex} / ${questions.length}`;
        }

        // Finish test and show results
        function finishTest() {
            calculateResults();
        }

        // Calculate test results
        function calculateResults() {
            const categoryScores = {};
            academicCategories.forEach(cat => {
                categoryScores[cat.name] = { total: 0, count: 0 };
            });

            questions.forEach(q => {
                const answer = answers[q.id];
                if (answer !== undefined) {
                    categoryScores[q.category].total += answer.value;
                    categoryScores[q.category].count++;
                }
            });

            const finalScores = {};
            for (const categoryName in categoryScores) {
                if (categoryScores[categoryName].count > 0) {
                    finalScores[categoryName] = categoryScores[categoryName].total / categoryScores[categoryName].count;
                } else {
                    finalScores[categoryName] = 0;
                }
            }

            // Calculate career matches
            const careerMatches = careerData.map(career => {
                let totalMatch = 0;
                let totalRequirements = 0;
                let matchedRequirements = 0;

                for (const reqCategory in career.requirements) {
                    const requiredScore = career.requirements[reqCategory];
                    const userScore = finalScores[reqCategory] || 0;

                    totalRequirements += requiredScore;

                    // Calculate weighted match for each category
                    const match = Math.min(userScore, requiredScore) / requiredScore;
                    totalMatch += match * requiredScore; // Weight by required score

                    if (userScore >= requiredScore) {
                        matchedRequirements++;
                    }
                }

                const matchPercentage = totalRequirements > 0 ? (totalMatch / totalRequirements) * 100 : 0;

                return {
                    ...career,
                    matchPercentage: matchPercentage,
                    matchedRequirementsCount: matchedRequirements,
                    totalRequirementsCount: Object.keys(career.requirements).length
                };
            });

            // Sort careers by match percentage in descending order
            careerMatches.sort((a, b) => b.matchPercentage - a.matchPercentage);

            displayResults(finalScores, careerMatches);
        }

        // Get top 3 areas
        function getTopAreas(scores) {
            if (!scores || typeof scores !== 'object') {
                return [];
            }
            return Object.entries(scores)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 3)
                .map(([category, score]) => ({
                    category,
                    score: score.toFixed(1)
                }));
        }

        // Get recommended careers
        function getRecommendedCareers(userScores) {
            const recommendations = [];
            
            careers.forEach(career => {
                let totalMatch = 0;
                let requirementCount = 0;
                
                Object.entries(career.requirements).forEach(([category, requiredScore]) => {
                    const userScore = userScores[category] || 0;
                    const match = Math.min(userScore / requiredScore, 1);
                    totalMatch += match;
                    requirementCount++;
                });
                
                const matchPercentage = Math.round((totalMatch / requirementCount) * 100);
                
                if (matchPercentage >= 60) {
                    recommendations.push({
                        ...career,
                        matchPercentage
                    });
                }
            });
            
            return recommendations.sort((a, b) => b.matchPercentage - a.matchPercentage);
        }

        async function saveTestResults(finalScores, careerMatches) {
            if (!db || !authUser) return;
            const recommendedCareers = careerMatches
                .filter(career => career.matchPercentage >= 60)
                .map(career => ({
                    name: career.name,
                    matchPercentage: Math.round(career.matchPercentage)
                }));
            await db.collection('testResults').add({
                userId: authUser.uid,
                username: authUser.displayName || '',
                role: currentUserRole,
                categoryScores: finalScores,
                topAreas: getTopAreas(finalScores),
                recommendedCareers,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        }

        let advisorChart = null;

        function getReadableDate(timestamp) {
            if (!timestamp) return '-';
            if (timestamp.seconds) {
                return new Date(timestamp.seconds * 1000).toLocaleDateString('tr-TR');
            }
            return new Date(timestamp).toLocaleDateString('tr-TR');
        }

        async function loadAdvisorDashboard() {
            if (!db || !authUser || !isAdvisor()) return;
            const listBody = document.getElementById('advisor-student-list');
            if (!listBody) return;
            listBody.innerHTML = '<tr><td colspan="3">Ã–ÄŸrenciler yÃ¼kleniyor...</td></tr>';
            try {
                const snapshot = await db.collection('users')
                    .where('advisorId', '==', authUser.uid)
                    .get();
                if (snapshot.empty) {
                    listBody.innerHTML = '<tr><td colspan="3">AtanmÄ±ÅŸ Ã¶ÄŸrenci bulunamadÄ±.</td></tr>';
                    return;
                }
                listBody.innerHTML = '';
                const studentPromises = snapshot.docs.map(async doc => {
                    const data = doc.data();
                    const resultsSnapshot = await db.collection('testResults')
                        .where('userId', '==', doc.id)
                        .orderBy('createdAt', 'desc')
                        .get();
                    const latestResult = resultsSnapshot.docs[0]?.data();
                    const row = document.createElement('tr');
                    row.classList.add('advisor-row');
                    row.dataset.studentId = doc.id;
                    row.innerHTML = `
                        <td>${data.username || 'Ã–ÄŸrenci'}</td>
                        <td>${latestResult ? getReadableDate(latestResult.createdAt) : '-'}</td>
                        <td>${resultsSnapshot.size}</td>
                    `;
                    row.addEventListener('click', () => {
                        document.querySelectorAll('.advisor-row').forEach(item => item.classList.remove('active'));
                        row.classList.add('active');
                        loadAdvisorStudentDetails(doc.id, data.username || 'Ã–ÄŸrenci');
                    });
                    listBody.appendChild(row);
                });
                await Promise.all(studentPromises);
            } catch (error) {
                console.error('Advisor dashboard load error:', error);
                listBody.innerHTML = '<tr><td colspan="3">Ã–ÄŸrenciler yÃ¼klenirken hata oluÅŸtu.</td></tr>';
            }
        }

        async function loadAdvisorStudentDetails(studentId, studentName) {
            const nameEl = document.getElementById('advisor-student-name');
            const metaEl = document.getElementById('advisor-student-meta');
            const resultsBody = document.getElementById('advisor-results-list');
            if (nameEl) nameEl.textContent = studentName;
            if (metaEl) metaEl.textContent = 'Test sonuÃ§larÄ± yÃ¼kleniyor...';
            if (resultsBody) resultsBody.innerHTML = '<tr><td colspan="3">SonuÃ§lar yÃ¼kleniyor...</td></tr>';
            try {
                const resultsSnapshot = await db.collection('testResults')
                    .where('userId', '==', studentId)
                    .orderBy('createdAt', 'asc')
                    .get();
                if (resultsSnapshot.empty) {
                    if (metaEl) metaEl.textContent = 'Ã–ÄŸrencinin henÃ¼z test sonucu yok.';
                    if (resultsBody) resultsBody.innerHTML = '<tr><td colspan="3">SonuÃ§ bulunamadÄ±.</td></tr>';
                    updateAdvisorChart([]);
                    return;
                }
                const results = resultsSnapshot.docs.map(doc => doc.data());
                if (metaEl) metaEl.textContent = `${results.length} test sonucu bulundu.`;
                if (resultsBody) {
                    resultsBody.innerHTML = results.map(result => {
                        const topAreas = (result.topAreas || [])
                            .map(area => `${area.category} (${area.score})`)
                            .join(', ');
                        return `
                            <tr>
                                <td>${getReadableDate(result.createdAt)}</td>
                                <td>${topAreas || '-'}</td>
                                <td>${result.recommendedCareers ? result.recommendedCareers.length : 0}</td>
                            </tr>
                        `;
                    }).join('');
                }
                updateAdvisorChart(results);
            } catch (error) {
                console.error('Advisor student detail error:', error);
                if (metaEl) metaEl.textContent = 'SonuÃ§lar yÃ¼klenirken hata oluÅŸtu.';
                if (resultsBody) resultsBody.innerHTML = '<tr><td colspan="3">SonuÃ§lar yÃ¼klenirken hata oluÅŸtu.</td></tr>';
                updateAdvisorChart([]);
            }
        }

        function updateAdvisorChart(results) {
            const chartCanvas = document.getElementById('advisor-progress-chart');
            if (!chartCanvas || typeof Chart === 'undefined') return;
            if (advisorChart instanceof Chart) {
                advisorChart.destroy();
            }
            const labels = results.map(result => getReadableDate(result.createdAt));
            const dataPoints = results.map(result => {
                const scores = Object.values(result.categoryScores || {});
                const topScore = scores.length ? Math.max(...scores) : 0;
                return Number.isFinite(topScore) ? Number(topScore.toFixed(2)) : 0;
            });
            advisorChart = new Chart(chartCanvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels,
                    datasets: [{
                        label: 'En YÃ¼ksek Puan',
                        data: dataPoints,
                        borderColor: '#FFD700',
                        backgroundColor: 'rgba(255, 215, 0, 0.2)',
                        borderWidth: 2,
                        pointRadius: 4,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#FFFFFF'
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: { color: '#FFFFFF' },
                            grid: { color: 'rgba(255,255,255,0.1)' }
                        },
                        y: {
                            ticks: { color: '#FFFFFF' },
                            grid: { color: 'rgba(255,255,255,0.1)' },
                            beginAtZero: true,
                            max: 4
                        }
                    }
                }
            });
        }

        // Display results  
        async function displayResults(finalScores, careerMatches) {
            // Use existing page navigation system
            showPage('results');
            
            // Store results globally for other functions to use
            testResults = {
                categoryScores: finalScores,
                topAreas: getTopAreas(finalScores),
                recommendedCareers: careerMatches.filter(career => career.matchPercentage >= 60)
            };

            saveTestResults(finalScores, careerMatches).catch(error => {
                console.error('Test result save error:', error);
            });

            // ğŸ”¥ DanÄ±ÅŸman paneli iÃ§in Firestore kaydÄ±
try {
    await db.collection("results").add({
        name: authUser?.displayName || "Ã–ÄŸrenci",
        results: finalScores,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
} catch (e) {
    console.error("Firestore save error:", e);
}
            // Update existing radar chart if it exists
            setTimeout(() => {
                const ctx = document.getElementById('radarChart');
                if (ctx && typeof Chart !== 'undefined') {
                    displayRadarChart(finalScores);
                }
                
                // Update top areas if container exists
                const topAreasContainer = document.getElementById('top-areas-list');
                if (topAreasContainer) {
                    displayTopAreas(finalScores);
                }
                
                // Update career results if container exists  
                const careerContainer = document.getElementById('career-results');
                if (careerContainer) {
                    displayCareerRecommendations(careerMatches);
                }
            }, 100);
        }
        
        // Display existing results when navigating to results page
        function displayExistingResults() {
            if (!window.testResults || !window.testResults.categoryScores) {
                return;
            }
            
            const finalScores = window.testResults.categoryScores;
            const recommendedCareers = window.testResults.recommendedCareers || [];
            
            // Update existing radar chart if it exists
            setTimeout(() => {
                const ctx = document.getElementById('radarChart');
                if (ctx && typeof Chart !== 'undefined') {
                    displayRadarChart(finalScores);
                }
                
                // Update top areas if container exists
                const topAreasContainer = document.getElementById('top-areas-list');
                if (topAreasContainer) {
                    displayTopAreas(finalScores);
                }
                
                // Update career results if container exists  
                const careerContainer = document.getElementById('career-results');
                if (careerContainer) {
                    displayCareerRecommendations(recommendedCareers);
                }
            }, 100);
        }
        
        // Display radar chart with new data
        function displayRadarChart(finalScores) {
            const ctx = document.getElementById('radarChart');
            if (!ctx) return;
            
            if (!finalScores || typeof finalScores !== 'object') {
                return;
            }
            
            const chartContext = ctx.getContext('2d');
            
            // Destroy existing chart if it exists
            if (window.radarChart instanceof Chart) {
                window.radarChart.destroy();
            }

            const labels = Object.keys(finalScores);
            const data = Object.values(finalScores);

            window.radarChart = new Chart(chartContext, {
                type: 'radar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'PuanlarÄ±nÄ±z',
                        data: data,
                        backgroundColor: 'rgba(255, 215, 0, 0.2)',
                        borderColor: '#FFD700',
                        borderWidth: 2,
                        pointBackgroundColor: '#FFD700',
                        pointBorderColor: '#FFA500',
                        pointRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#FFFFFF'
                            }
                        }
                    },
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 4,
                            ticks: {
                                color: '#FFFFFF',
                                stepSize: 1
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.2)'
                            },
                            pointLabels: {
                                color: '#FFFFFF',
                                font: {
                                    size: 10
                                }
                            }
                        }
                    }
                }
            });
        }
        
        // Display top areas with new data
        function displayTopAreas(finalScores) {
            const container = document.getElementById('top-areas-list');
            if (!container) return;
            
            if (!finalScores || typeof finalScores !== 'object') {
                container.innerHTML = '<p>No results available</p>';
                return;
            }
            
            container.innerHTML = '';
            
            const sortedScores = Object.entries(finalScores)
                .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
                .slice(0, 3);
            
            sortedScores.forEach(([category, score]) => {
                const areaElement = document.createElement('div');
                areaElement.className = 'area-item';
                areaElement.innerHTML = `
                    <div>
                        <i class="fas fa-star me-2"></i>
                        ${category}
                    </div>
                    <span class="area-score">${score.toFixed(2)}/4.0</span>
                `;
                container.appendChild(areaElement);
            });
        }
        
        // Display career recommendations with new data
        function displayCareerRecommendations(careerMatches) {
            const container = document.getElementById('career-results');
            if (!container) return;
            
            if (!careerMatches || !Array.isArray(careerMatches)) {
                container.innerHTML = '<p>No career recommendations available</p>';
                return;
            }
            
            container.innerHTML = '';
            
            const recommendedCareers = careerMatches.filter(career => career.matchPercentage >= 60);
            
            if (recommendedCareers.length > 0) {
                recommendedCareers.forEach((career, index) => {
                    const careerCard = document.createElement('div');
                    careerCard.className = 'career-card';
                    careerCard.innerHTML = `
                        <div class="career-header">
                            <i class="fas fa-briefcase career-icon"></i>
                            <span class="career-match">${Math.round(career.matchPercentage)}% Uyum</span>
                        </div>
                        <h4 class="career-title">${career.name}</h4>
                        <p class="career-description">${career.description}</p>
                        <div class="career-actions">
                            <button class="btn-career btn-career-primary" data-career-action="details" data-career-id="${index + 1}">
                                <i class="fas fa-info-circle me-1"></i>DetaylarÄ± GÃ¶r
                            </button>
                            <button class="btn-career btn-career-secondary" data-career-action="open-vr" data-career-id="${index + 1}">
                                <i class="fas fa-vr-cardboard me-1"></i>VR
                            </button>
                        </div>
                    `;
                    container.appendChild(careerCard);
                });
            } else {
                container.innerHTML = `
                    <div class="col-12 text-center">
                        <div class="alert alert-info">
                            <h5>HenÃ¼z uygun meslek bulunamadÄ±</h5>
                            <p>PuanlarÄ±nÄ±za %60 ve Ã¼zeri uyum gÃ¶steren meslek bulunamadÄ±. Testi tekrar Ã§Ã¶zmeyi deneyebilirsiniz.</p>
                        </div>
                    </div>
                `;
            }
        }

        // Load all careers for careers page
        function loadAllCareers() {
            const container = document.getElementById('all-careers');
            container.innerHTML = '';
            
            careers.forEach(career => {
                const careerCard = document.createElement('div');
                careerCard.className = 'career-card';
                careerCard.innerHTML = `
                    <div class="career-header">
                        <i class="${career.icon} career-icon"></i>
                    </div>
                    <h4 class="career-title">${career.name}</h4>
                    <p class="career-description">${career.summary}</p>
                    <div class="career-actions">
                        <button class="btn-career btn-career-primary" data-career-action="details" data-career-id="${career.id}">
                            <i class="fas fa-info-circle me-1"></i>DetaylarÄ± GÃ¶r
                        </button>
                        <button class="btn-career btn-career-secondary" data-career-action="open-vr" data-career-id="${career.id}">
                            <i class="fas fa-vr-cardboard me-1"></i>VR Deneyimi
                        </button>
                    </div>
                `;
                container.appendChild(careerCard);
            });
        }

        // Load VR careers for VR explore page
        function loadVRCareers() {
            const container = document.getElementById('vr-career-list');
            container.innerHTML = '';
            
            const availableCareers = testResults ? testResults.recommendedCareers : careers.slice(0, 4);
            
            availableCareers.forEach(career => {
                const vrCard = document.createElement('div');
                vrCard.className = 'vr-career-card';
                vrCard.dataset.careerAction = 'open-vr';
                vrCard.dataset.careerId = career.id;
                vrCard.innerHTML = `
                    <i class="${career.icon} vr-career-icon"></i>
                    <h5 class="vr-career-title">${career.name}</h5>
                    <p class="vr-career-subtitle">VR SimÃ¼lasyonu</p>
                `;
                container.appendChild(vrCard);
            });
        }

        // Show career detail modal
        function showCareerDetail(careerId) {
            const career = careers.find(c => c.id === careerId);
            if (!career) return;
            
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'modal fade';
            modal.innerHTML = `
                <div class="modal-dialog modal-lg">
                    <div class="modal-content" style="background: var(--gradient-card); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.2); color: var(--text-light);">
                        <div class="modal-header" style="border-bottom: 1px solid rgba(255, 255, 255, 0.2);">
                            <h5 class="modal-title">
                                <i class="${career.icon} me-2" style="color: var(--accent-yellow);"></i>${career.name}
                            </h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <h6 style="color: var(--accent-yellow);">Meslek TanÄ±mÄ±</h6>
                            <p>${career.description}</p>
                            
                            <h6 style="color: var(--accent-yellow);">Gerekli Akademik Alanlar</h6>
                            <div class="row g-2">
                                ${Object.entries(career.requirements).map(([category, score]) => `
                                    <div class="col-md-6">
                                        <div class="d-flex justify-content-between align-items-center p-2" style="background: rgba(255, 255, 255, 0.1); border-radius: 10px;">
                                            <span><i class="fas fa-star me-2"></i>${category}</span>
                                            <span class="badge" style="background: var(--accent-yellow); color: var(--primary-purple);">${score}/4.0</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            
                            <div class="text-center mt-4">
                                <button class="btn btn-primary btn-lg" data-career-action="open-vr-close" data-career-id="${career.id}">
                                    <i class="fas fa-vr-cardboard me-2"></i>VR SimÃ¼lasyonunu BaÅŸlat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            const bsModal = new bootstrap.Modal(modal);
            bsModal.show();
            
            // Remove modal from DOM when hidden
            modal.addEventListener('hidden.bs.modal', function() {
                document.body.removeChild(modal);
            });
        }

        // Open VR simulation
        function openVRSimulation(careerId) {
            const career = careers.find(c => c.id === careerId);
            if (!career) return;
            
            currentSimulation = career;
            
            // Update simulation page content
            document.getElementById('simulation-title').textContent = `${career.name.toUpperCase()} MESLEÄÄ° SÄ°MÃœLASYONU`;
            
            showPage('vr-simulation');
            
            // Initialize VR video player if career has VR video
            if (career.hasVRVideo && career.vrVideoFile) {
                setTimeout(() => {
                    initVRVideoPlayer(career.vrVideoFile);
                }, 500);
            }
        }

        // Get career illustration
        function getCareerIllustration(illustrationType) {
            const illustrations = {
                'doctor-office': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-user-md"></i>
                        <i class="fas fa-stethoscope ms-3"></i>
                        <i class="fas fa-heartbeat ms-3"></i>
                    </div>
                `,
                'classroom': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <i class="fas fa-book ms-3"></i>
                        <i class="fas fa-graduation-cap ms-3"></i>
                    </div>
                `,
                'courtroom': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-balance-scale"></i>
                        <i class="fas fa-gavel ms-3"></i>
                        <i class="fas fa-landmark ms-3"></i>
                    </div>
                `,
                'construction-site': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-hard-hat"></i>
                        <i class="fas fa-tools ms-3"></i>
                        <i class="fas fa-building ms-3"></i>
                    </div>
                `,
                'software-office': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-laptop-code"></i>
                        <i class="fas fa-mobile-alt ms-3"></i>
                        <i class="fas fa-code ms-3"></i>
                    </div>
                `,
                'art-studio': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-palette"></i>
                        <i class="fas fa-paint-brush ms-3"></i>
                        <i class="fas fa-image ms-3"></i>
                    </div>
                `,
                'nurse-station': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-user-nurse"></i>
                        <i class="fas fa-hospital ms-3"></i>
                        <i class="fas fa-pills ms-3"></i>
                    </div>
                `,
                'music-studio': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-music"></i>
                        <i class="fas fa-guitar ms-3"></i>
                        <i class="fas fa-microphone ms-3"></i>
                    </div>
                `,
                'fashion-studio': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-tshirt"></i>
                        <i class="fas fa-cut ms-3"></i>
                        <i class="fas fa-magic ms-3"></i>
                    </div>
                `,
                'business-office': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-briefcase"></i>
                        <i class="fas fa-chart-line ms-3"></i>
                        <i class="fas fa-handshake ms-3"></i>
                    </div>
                `,
                'agricultural-field': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-seedling"></i>
                        <i class="fas fa-tractor ms-3"></i>
                        <i class="fas fa-leaf ms-3"></i>
                    </div>
                `,
                'tourism-guide': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-map-marked-alt"></i>
                        <i class="fas fa-camera ms-3"></i>
                        <i class="fas fa-globe-americas ms-3"></i>
                    </div>
                `,
                'electrical-lab': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-bolt"></i>
                        <i class="fas fa-microchip ms-3"></i>
                        <i class="fas fa-plug ms-3"></i>
                    </div>
                `,
                'child-development': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-baby"></i>
                        <i class="fas fa-child ms-3"></i>
                        <i class="fas fa-puzzle-piece ms-3"></i>
                    </div>
                `,
                'handicrafts-workshop': `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem; color: var(--accent-yellow);">
                        <i class="fas fa-hands"></i>
                        <i class="fas fa-scissors ms-3"></i>
                        <i class="fas fa-gem ms-3"></i>
                    </div>
                `
            };
            
            return illustrations[illustrationType] || illustrations['doctor-office'];
        }

        // Load answers from localStorage
        function loadAnswersFromStorage() {
            const saved = localStorage.getItem('abko_answers');
            if (saved) {
                answers = JSON.parse(saved);
            }
        }

        // Fill randomly for testing
        function fillRandomly() {
            for (let i = 0; i < questions.length; i++) {
                const question = questions[i];
                answers[question.id] = {
                    value: Math.floor(Math.random() * 4) + 1,
                    category: question.category
                };
            }
            localStorage.setItem('abko_answers', JSON.stringify(answers));
            finishTest();
        }

        // Reset test
        function resetTest() {
            answers = {};
            currentQuestionIndex = 0;
            testResults = null;
            localStorage.removeItem('abko_answers');
            
            if (document.getElementById('test-page').classList.contains('active')) {
                initializeTest();
            }
        }

        // Add scroll animations
        function addScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);
            
            // Observe elements that should animate
            document.querySelectorAll('.career-card, .action-card, .area-item').forEach(el => {
                el.classList.add('fade-in');
                observer.observe(el);
            });
        }

        // Add video placeholder click handler
        document.addEventListener('click', function(e) {
            if (e.target.closest('.video-placeholder')) {
                // Show VR experience modal
                const modal = document.createElement('div');
                modal.className = 'modal fade';
                modal.innerHTML = `
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content" style="background: var(--gradient-card); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.2); color: var(--text-light);">
                            <div class="modal-header" style="border-bottom: 1px solid rgba(255, 255, 255, 0.2);">
                                <h5 class="modal-title">
                                    <i class="fas fa-vr-cardboard me-2" style="color: var(--accent-yellow);"></i>VR Deneyimi
                                </h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body text-center p-5">
                                <div class="mb-4">
                                    <i class="fas fa-vr-cardboard" style="font-size: 5rem; color: var(--accent-yellow);"></i>
                                </div>
                                <h4 class="mb-3">${currentSimulation ? currentSimulation.name : 'Meslek'} VR Deneyimi</h4>
                                <p class="lead mb-4">Bu mesleÄŸi sanal gerÃ§eklik ile deneyimlemeye hazÄ±rlanÄ±yorsunuz!</p>
                                <div class="alert alert-warning" style="background: rgba(255, 193, 7, 0.2); border: 1px solid rgba(255, 193, 7, 0.5); color: var(--text-light);">
                                    <i class="fas fa-exclamation-triangle me-2"></i>
                                    <strong>YakÄ±nda:</strong> VR iÃ§eriÄŸi ÅŸu anda hazÄ±rlanmaktadÄ±r. Bu Ã¶zellik gelecek gÃ¼ncellemede aktif olacaktÄ±r.
                                </div>
                                <div class="mt-4">
                                    <p style="color: rgba(255, 255, 255, 0.7);">
                                        <i class="fas fa-info-circle me-2"></i>
                                        VR deneyimi iÃ§in VR gÃ¶zlÃ¼k veya uyumlu cihaz gereklidir.
                                    </p>
                                </div>
                            </div>
                            <div class="modal-footer" style="border-top: 1px solid rgba(255, 255, 255, 0.2);">
                                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Kapat</button>
                                <button type="button" class="btn btn-primary" disabled>
                                    <i class="fas fa-play me-2"></i>VR'Ä± BaÅŸlat (YakÄ±nda)
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(modal);
                const bsModal = new bootstrap.Modal(modal);
                bsModal.show();
                
                modal.addEventListener('hidden.bs.modal', function() {
                    document.body.removeChild(modal);
                });
            }
        });

        // 360 VR Video Player Functions
        function initVRVideoPlayer(videoFile) {
            const container = document.getElementById('vr-video-container');
            
            // Check if it's a YouTube video
            if (videoFile.includes('youtube.com') || videoFile.includes('youtu.be')) {
                initYouTubeVR(videoFile);
                return;
            }
            
            // For local video files (if needed in future)
            showVideoError('Video formatÄ± desteklenmiyor. VR deneyimi iÃ§in YouTube video kullanÄ±n.');
        }

        // YouTube VR Integration
        function initYouTubeVR(videoUrl) {
            const container = document.getElementById('vr-video-container');
            const videoId = extractYouTubeId(videoUrl);
            
            console.log('360Â° VR Video baÅŸlatÄ±lÄ±yor...');
            console.log('Video ID:', videoId);
            console.log('Original URL:', videoUrl);
            
            if (!videoId) {
                showVideoError('Video yÃ¼klenemedi - Video ID bulunamadÄ±');
                return;
            }
            
            container.innerHTML = `
                <div class="vr-loading">
                    <div class="spinner"></div>
                    <p>360Â° VR Deneyimi YÃ¼kleniyor...</p>
                    <p style="font-size: 0.9rem; opacity: 0.7;">Ä°nternet baÄŸlantÄ±sÄ± kontrol ediliyor...</p>
                </div>
                <div id="vr-video-iframe">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&origin=${window.location.origin}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
                        allowfullscreen
                        onload="onYouTubeIframeLoad()"
                        onerror="onYouTubeIframeError()">
                    </iframe>
                </div>
            `;
            
            console.log('YouTube iframe oluÅŸturuldu');
            
            // Set timeout for loading
            setTimeout(() => {
                const loading = document.querySelector('.vr-loading');
                if (loading) {
                    loading.innerHTML = `
                        <div class="spinner"></div>
                        <p>Video yÃ¼kleniyor...</p>
                        <p style="font-size: 0.9rem; opacity: 0.7;">Biraz daha bekleyin...</p>
                    `;
                }
            }, 3000);
            
            // Add event listeners
            addVREventListeners();
            
            // Add ESC key listener for closing VR
            document.addEventListener('keydown', handleVRKeyPress);
        }

        // YouTube iframe load success
        function onYouTubeIframeLoad() {
            console.log('YouTube iframe baÅŸarÄ±yla yÃ¼klendi');
            const loading = document.querySelector('.vr-loading');
            if (loading) {
                loading.remove();
            }
        }

        // YouTube iframe load error
        function onYouTubeIframeError() {
            console.error('YouTube iframe yÃ¼klenirken hata oluÅŸtu');
            showVideoError('YouTube video yÃ¼klenemedi. Ä°nternet baÄŸlantÄ±nÄ±zÄ± kontrol edin.');
        }

        function extractYouTubeId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);
            return (match && match[2].length === 11) ? match[2] : null;
        }

        function initThreeJSScene() {
            const container = document.getElementById('vr-video-container');
            
            try {
                // Check if Three.js is loaded
                if (typeof THREE === 'undefined') {
                    throw new Error('Three.js kÃ¼tÃ¼phanesi yÃ¼klenemedi');
                }
                
                // Create scene
                vrScene = new THREE.Scene();
                
                // Create camera
                vrCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
                vrCamera.position.set(0, 0, 0.1);
                
                // Create renderer
                vrRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                vrRenderer.setSize(container.clientWidth, container.clientHeight);
                vrRenderer.setClearColor(0x000000, 1);
                container.appendChild(vrRenderer.domElement);
                
                // Check if OrbitControls is available
                if (typeof THREE.OrbitControls === 'undefined') {
                    throw new Error('OrbitControls yÃ¼klenemedi');
                }
                
                // Create controls
                vrControls = new THREE.OrbitControls(vrCamera, vrRenderer.domElement);
                vrControls.enableZoom = true;
                vrControls.enablePan = false;
                vrControls.enableDamping = true;
                vrControls.dampingFactor = 0.05;
                vrControls.rotateSpeed = 0.5;
                vrControls.maxDistance = 2;
                vrControls.minDistance = 0.1;
                
                // Create multiple planes to simulate 360Â° effect
                create360Effect();
                
                // Position camera inside the scene
                vrCamera.position.set(0, 0, 0.1);
                
                // Handle window resize
                window.addEventListener('resize', onWindowResize);
                
                console.log('360Â° effect scene baÅŸarÄ±yla oluÅŸturuldu');
                
            } catch (error) {
                console.error('Three.js initialization error:', error);
                showVideoError('Three.js kÃ¼tÃ¼phanesi yÃ¼klenirken hata oluÅŸtu: ' + error.message);
            }
        }

        function create360Effect() {
            // Create video texture
            videoTexture = new THREE.VideoTexture(videoElement);
            videoTexture.minFilter = THREE.LinearFilter;
            videoTexture.magFilter = THREE.LinearFilter;
            videoTexture.format = THREE.RGBFormat;
            
            // Create material
            videoMaterial = new THREE.MeshBasicMaterial({ map: videoTexture });
            
            // Create multiple planes to simulate 360Â° environment
            const planeGeometry = new THREE.PlaneGeometry(2, 1.2);
            
            // Front wall
            const frontWall = new THREE.Mesh(planeGeometry, videoMaterial);
            frontWall.position.set(0, 0, -1);
            vrScene.add(frontWall);
            
            // Back wall (same video, different position)
            const backWall = new THREE.Mesh(planeGeometry, videoMaterial);
            backWall.position.set(0, 0, 1);
            backWall.rotation.y = Math.PI;
            vrScene.add(backWall);
            
            // Left wall
            const leftWall = new THREE.Mesh(planeGeometry, videoMaterial);
            leftWall.position.set(-1, 0, 0);
            leftWall.rotation.y = Math.PI / 2;
            vrScene.add(leftWall);
            
            // Right wall
            const rightWall = new THREE.Mesh(planeGeometry, videoMaterial);
            rightWall.position.set(1, 0, 0);
            rightWall.rotation.y = -Math.PI / 2;
            vrScene.add(rightWall);
            
            // Ceiling
            const ceiling = new THREE.Mesh(planeGeometry, videoMaterial);
            ceiling.position.set(0, 0.6, 0);
            ceiling.rotation.x = -Math.PI / 2;
            vrScene.add(ceiling);
            
            // Floor
            const floor = new THREE.Mesh(planeGeometry, videoMaterial);
            floor.position.set(0, -0.6, 0);
            floor.rotation.x = Math.PI / 2;
            vrScene.add(floor);
            
            // Store references for cleanup
            sphereMesh = [frontWall, backWall, leftWall, rightWall, ceiling, floor];
        }

        function addVREventListeners() {
            // Video event listeners (if video element exists)
            if (videoElement) {
                videoElement.addEventListener('loadeddata', () => {
                    console.log('Video yÃ¼klendi:', videoElement.videoWidth + 'x' + videoElement.videoHeight);
                    
                    // Remove loading state
                    const loading = document.querySelector('.vr-loading');
                    if (loading) {
                        loading.remove();
                    }
                    
                    // Auto-play video
                    videoElement.play().then(() => {
                        isPlaying = true;
                        updatePlayPauseButton();
                        console.log('Video oynatÄ±lÄ±yor');
                    }).catch(err => {
                        console.log('Auto-play prevented:', err);
                        // Manual play button will be available
                    });
                });
                
                videoElement.addEventListener('error', (e) => {
                    console.error('Video loading error:', e);
                    showVideoError('Video dosyasÄ± yÃ¼klenirken hata oluÅŸtu. ogretmenVR.mp4 dosyasÄ±nÄ±n mevcut olduÄŸundan emin olun.');
                });
                
                videoElement.addEventListener('loadstart', () => {
                    console.log('Video yÃ¼klenmeye baÅŸladÄ±');
                });
                
                videoElement.addEventListener('canplay', () => {
                    console.log('Video oynatÄ±lmaya hazÄ±r');
                });
            }
        }

        // Handle VR key presses
        function handleVRKeyPress(event) {
            if (event.key === 'Escape') {
                // If in fullscreen, exit fullscreen first
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    // If not in fullscreen, hide VR experience
                    hideVRExperience();
                }
            }
        }

        // Hide VR experience
        function hideVRExperience() {
            // Exit fullscreen if active
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            
            // Cleanup VR resources
            cleanupVR();
            
            // Remove key listener
            document.removeEventListener('keydown', handleVRKeyPress);
            
            // Navigate back to VR explore page
            showPage('vr-explore');
        }

        // Close VR experience (kept for backward compatibility)
        function closeVRExperience() {
            hideVRExperience();
        }

        function togglePlayPause() {
            try {
                // For YouTube videos, we need to control the iframe
                const iframe = document.querySelector('#vr-video-iframe iframe');
                if (iframe && iframe.src) {
                    // YouTube iframe API control
                    const iframeSrc = iframe.src;
                    if (isPlaying) {
                        // Pause video by removing autoplay parameter
                        iframe.src = iframeSrc.replace('autoplay=1', 'autoplay=0');
                        isPlaying = false;
                    } else {
                        // Play video by adding autoplay parameter
                        iframe.src = iframeSrc.replace('autoplay=0', 'autoplay=1');
                        isPlaying = true;
                    }
                    updatePlayPauseButton();
                } else if (videoElement && videoElement.play) {
                    // For local video files
                    if (isPlaying) {
                        videoElement.pause();
                        isPlaying = false;
                    } else {
                        videoElement.play().catch(err => {
                            console.log('Video play error:', err);
                        });
                        isPlaying = true;
                    }
                    updatePlayPauseButton();
                } else {
                    // Fallback: just toggle the button state
                    isPlaying = !isPlaying;
                    updatePlayPauseButton();
                    console.log('Video control not available, toggling button state only');
                }
            } catch (error) {
                console.error('Toggle play/pause error:', error);
                // Fallback: just toggle the button state
                isPlaying = !isPlaying;
                updatePlayPauseButton();
            }
        }

        function updatePlayPauseButton() {
            const btn = document.getElementById('play-pause-btn');
            const icon = btn.querySelector('i');
            
            if (isPlaying) {
                icon.className = 'fas fa-pause';
                btn.innerHTML = '<i class="fas fa-pause"></i> Duraklat';
            } else {
                icon.className = 'fas fa-play';
                btn.innerHTML = '<i class="fas fa-play"></i> Oynat';
            }
        }

        function toggleFullscreen() {
            const container = document.getElementById('vr-video-container');
            const controls = document.querySelector('.vr-controls');
            const instructions = document.querySelector('.vr-instructions');
            
            if (!document.fullscreenElement) {
                container.requestFullscreen().then(() => {
                    container.classList.add('fullscreen');
                    
                    // Hide controls and instructions in fullscreen
                    if (controls) controls.style.display = 'none';
                    if (instructions) instructions.style.display = 'none';
                    
                    onWindowResize();
                }).catch(err => {
                    console.log('Fullscreen error:', err);
                });
            } else {
                document.exitFullscreen().then(() => {
                    container.classList.remove('fullscreen');
                    
                    // Show controls and instructions when exiting fullscreen
                    if (controls) controls.style.display = 'flex';
                    if (instructions) instructions.style.display = 'block';
                    
                    onWindowResize();
                });
            }
        }

        function resetView() {
            vrCamera.position.set(0, 0, 0.1);
            vrCamera.rotation.set(0, 0, 0);
            vrControls.reset();
        }

        function onWindowResize() {
            const container = document.getElementById('vr-video-container');
            if (!container) return;
            
            const width = container.clientWidth;
            const height = container.clientHeight;
            
            // Only resize Three.js components if they exist
            if (vrCamera && vrRenderer) {
                vrCamera.aspect = width / height;
                vrCamera.updateProjectionMatrix();
                vrRenderer.setSize(width, height);
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            
            // Only update controls if they exist
            if (vrControls) {
                vrControls.update();
            }
            
            // Only render if all components exist
            if (vrRenderer && vrScene && vrCamera) {
                vrRenderer.render(vrScene, vrCamera);
            }
        }

        function showVideoError(message = 'Video yÃ¼klenirken hata oluÅŸtu') {
            const container = document.getElementById('vr-video-container');
            container.innerHTML = `
                <div class="vr-loading">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #ff6b6b; margin-bottom: 15px;"></i>
                    <h4>VR Video YÃ¼klenemedi</h4>
                    <p>${message}</p>
                    <div class="alert alert-warning mt-3" style="background: rgba(255, 193, 7, 0.2); border: 1px solid rgba(255, 193, 7, 0.5); color: var(--text-light);">
                        <i class="fas fa-info-circle me-2"></i>
                        <strong>OlasÄ± Nedenler:</strong>
                        <ul class="mt-2 mb-0" style="text-align: left;">
                            <li>Ä°nternet baÄŸlantÄ±sÄ± sorunu</li>
                            <li>YouTube video eriÅŸim kÄ±sÄ±tlamasÄ±</li>
                            <li>TarayÄ±cÄ± uyumluluk sorunu</li>
                        </ul>
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-primary me-2" data-action="reload">
                            <i class="fas fa-redo me-2"></i>Tekrar Dene
                        </button>
                        <button class="btn btn-outline-light" data-action="hide-vr">
                            <i class="fas fa-arrow-left me-2"></i>Geri DÃ¶n
                        </button>
                    </div>
                </div>
            `;
        }

        // Cleanup VR resources when leaving page
        function cleanupVR() {
            // Cleanup YouTube iframe if exists
            const iframe = document.querySelector('#vr-video-iframe iframe');
            if (iframe) {
                iframe.src = '';
            }
            
            // Remove key listener
            document.removeEventListener('keydown', handleVRKeyPress);
            
            // Stop video if playing
            if (videoElement && !videoElement.paused) {
                videoElement.pause();
            }
            
            // Exit fullscreen if active
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            
            // Cleanup Three.js resources if they exist
            if (vrRenderer) {
                vrRenderer.dispose();
                vrRenderer = null;
            }
            
            if (vrScene) {
                vrScene.clear();
                vrScene = null;
            }
            
            if (vrControls) {
                vrControls.dispose();
                vrControls = null;
            }
            
            console.log('VR resources cleaned up');
        }

        // Update showPage function to cleanup VR when leaving
        const originalShowPage = showPage;
        showPage = function(pageId) {
            // Cleanup VR if leaving VR simulation page
            if (document.getElementById('vr-simulation-page').classList.contains('active')) {
                cleanupVR();
            }
            
            // Call original function
            originalShowPage(pageId);
        };
        
        document.addEventListener("DOMContentLoaded", () => {
           document.querySelectorAll("[data-page]").forEach(el => {
               el.addEventListener("click", (e) => {
                   e.preventDefault();
                   const page = el.getAttribute("data-page");
                   showPage(page);
           });
       });
   });
    

// Project data
const projects = [
    {
        id: 'codeAssist',
        title: 'CodeAssist',
        description: 'An IDE for Android that allows you to create your own android application with real programming.',
        image: 'https://placehold.co/600x400/fde8e7/31111d?text=CodeAssist',
        details: {
            description: 'CodeAssist is an integrated development environment (IDE) that allows you to create your own android application with real programming (Java, Kotlin, XML).',
            features: [
                '<strong>Easy-to-use:</strong> Makes coding on small screens easier than ever, similar to Android Studio.',
                '<strong>Smooth Code Editor:</strong> Features zooming, a shortcut bar, undo/redo, and more.',
                '<strong>Auto Code Completions:</strong> Intelligent and efficient code suggestions for Java.',
                '<strong>Real-time error highlighting:</strong> Instantly identify errors in your code.',
                '<strong>Design Preview:</strong> Preview layouts without needing to compile.',
                '<strong>One-Click Compile:</strong> Build APK or AAB with a single click using background compiling.',
                '<strong>Library Manager:</strong> Easily manage project dependencies without manual `build.gradle` edits.',
                '<strong>AAB Support:</strong> Prepare your apps for production and publishing on the Play Store.',
                '<strong>R8/ProGuard:</strong> Obfuscate your application to make it difficult to mod or crack.',
                '<strong>Debug Tools:</strong> Access live build logs, app logs, and a debugger.',
                '<strong>Java 8 Support:</strong> Use modern language features like lambdas.',
                '<strong>Open Source:</strong> Source code is available on <a href="https://github.com/tyron12233/CodeAssist" target="_blank">GitHub</a>.'
            ],
            upcoming: [
                'Layout Editor/Preview',
                'Git integration'
            ],
            links: [
                { text: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.tyron.code' },
                { text: 'Discord Community', url: 'https://discord.gg/pffnyE6prs' }
            ]
        }
    },
    {
        id: 'devSoc',
        title: 'Developers Society (ANIMO.DEV)',
        description: 'Founder of the premier organization for innovation and technology at De La Salle Lipa.',
        image: 'https://placehold.co/600x400/fde8e7/31111d?text=ANIMO.DEV',
        details: {
            description: 'As the Founder of the Developers Society (ANIMO.DEV), I established and led the premier student organization dedicated to fostering innovation, collaboration, and technological advancement at De La Salle Lipa. The organization serves as a hub for aspiring developers and tech enthusiasts to learn, build, and connect.',
            links: [
                { text: 'Instagram: @dlsl.devsoc', url: 'https://www.instagram.com/dlsl.devsoc/' }
            ]
        }
    },
    {
        id: 'blog',
        title: 'Personal Blog',
        description: 'A personal blog space where I share insights on technology, coding, and personal development.',
        image: 'https://placehold.co/600x400/fde8e7/31111d?text=Personal+Blog',
        details: {
            description: 'My personal blog, available at <a href="https://blog.tyronscott.me" target="_blank">blog.tyronscott.me</a>, is built on a modern content management system. It\'s a platform where I document my journey as a developer, discuss new technologies, and share tutorials. The design is focused on readability and a clean, minimalist aesthetic to keep the focus on the content.'
        }
    },
    {
        id: 'sketchub',
        title: 'Sketchub',
        description: 'A Better Platform For Sharing Your Awesome Creations',
        image: 'https://placehold.co/600x400/fde8e7/31111d?text=Sketchub',
        details: {
            description: 'An app store for open source projects. It is a platform for developers to share their projects and for users to discover new apps.',
            links: [
                { text: 'Visit Sketchub', url: 'https://sketchub.in/' }
            ]
        }
    }
];

function createFloatingShapes() {
    const heroSection = document.getElementById('hero');
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'floating-shapes';

    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        shapesContainer.appendChild(shape);
    }

    heroSection.appendChild(shapesContainer);
}

function createPhotoGallery() {
    const galleryContainer = document.querySelector('.photo-gallery');

    const photos = [
        {
            src: 'https://placehold.co/300x300/fde8e7/31111d?text=Profile',
            alt: 'Tyron Scott - Profile'
        },
        {
            src: 'https://placehold.co/300x300/e8f5e8/1d311d?text=DLSL',
            alt: 'At DLSL Campus'
        },
        {
            src: 'https://placehold.co/300x300/e8e8fd/1d1d31?text=DevSoc',
            alt: 'Developers Society'
        },
        {
            src: 'https://placehold.co/300x300/fde8fd/31111d?text=Code',
            alt: 'Coding Session'
        }
    ];

    const sizes = ['large', 'medium', 'medium', 'large'];

    photos.forEach((photo, index) => {
        const photoBubble = document.createElement('div');
        photoBubble.className = `photo-bubble ${sizes[index]}`;
        photoBubble.innerHTML = `
            <img src="${photo.src}" alt="${photo.alt}" data-index="${index}">
        `;
        galleryContainer.appendChild(photoBubble);
    });

    galleryContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            // Add a subtle animation feedback
            const bubble = event.target.parentElement;
            bubble.style.transform = 'scale(0.95)';
            setTimeout(() => {
                bubble.style.transform = '';
            }, 150);
        }
    });
}


function createProjectCards() {
    const portfolioContainer = document.querySelector('#portfolio .row');

    projects.forEach(project => {
        const projectCol = document.createElement('div');
        projectCol.className = 'col-lg-4 col-md-6';

        projectCol.innerHTML = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title} Project Image">
                <div class="card-body">
                    <h5 class="project-title">${project.title}</h5>
                    <p class="project-description">${project.description}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${project.id}Modal">
                        View Details
                    </button>
                </div>
            </div>
        `;

        portfolioContainer.appendChild(projectCol);
    });
}


function createModals() {
    const body = document.body;

    projects.forEach(project => {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = `${project.id}Modal`;
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('aria-labelledby', `${project.id}ModalLabel`);
        modal.setAttribute('aria-hidden', 'true');

        let modalBodyContent = `<p>${project.details.description}</p>`;

        if (project.details.features) {
            modalBodyContent += `
                <h6>Key Features:</h6>
                <ul>
                    ${project.details.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            `;
        }

        if (project.details.upcoming) {
            modalBodyContent += `
                <h6>Upcoming Features:</h6>
                <ul>
                    ${project.details.upcoming.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            `;
        }

        // Add links if they exist
        if (project.details.links) {
            modalBodyContent += `<p>`;
            project.details.links.forEach((link, index) => {
                if (index > 0) modalBodyContent += ' or ';
                modalBodyContent += `Find it on the <a href="${link.url}" target="_blank">${link.text}</a>`;
            });
            modalBodyContent += `.</p>`;
        }

        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered ${project.id === 'codeAssist' ? 'modal-lg' : ''}">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${project.id}ModalLabel">${project.title} Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${modalBodyContent}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        `;

        body.appendChild(modal);
    });
}

// Contact form handler
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Portfolio background color changer
function setupPortfolioColorChanger() {
    const portfolioSection = document.getElementById('portfolio');
    const backgroundColors = ['#fffbfe', '#fef7ff', '#fff7f5', '#f5f8ff', '#f5fff5'];
    let currentColorIndex = 0;

    // Use event delegation to handle clicks on dynamically created project titles
    portfolioSection.addEventListener('click', function (event) {
        if (event.target.classList.contains('project-title')) {
            currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
            portfolioSection.style.backgroundColor = backgroundColors[currentColorIndex];
        }
    });
}


function setupProjectCardColorChanger() {
    // Material 3 sample dynamic neutral / primary / tertiary container tones
    const material3Colors = [
        '#FFFBFE', // surface
        '#FDE8E7', // primary container (rose)
        '#E8F5E8', // secondary container (green)
        '#E8E8FD', // tertiary container (indigo)
        '#FDE8FD', // secondary container (pink)
        '#E3F2FD', // blue 50
        '#FFF3E0', // orange 50
        '#E8F0FE', // google blue tint
        '#E0F7FA', // cyan 50
        '#F1F8E9', // light green 50
        '#F3E5F5', // purple 50
        '#EDE7F6'  // deep purple 50
    ];

    const portfolioRow = document.querySelector('#portfolio .row');
    if (!portfolioRow) return;

    function getContrastColor(hex) {
        // Remove leading #
        const h = hex.replace('#', '');
        const r = parseInt(h.substring(0, 2), 16);
        const g = parseInt(h.substring(2, 4), 16);
        const b = parseInt(h.substring(4, 6), 16);
        // Per W3C relative luminance
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        return luminance > 0.7 ? '#201a1b' : '#ffffff'; // dark text on very light colors else white
    }

    portfolioRow.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        if (!card) return;
        const prevIndex = parseInt(card.dataset.colorIndex || '-1', 10);
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * material3Colors.length);
        } while (material3Colors.length > 1 && newIndex === prevIndex);

        const newColor = material3Colors[newIndex];
        card.style.backgroundColor = newColor;
        card.style.borderColor = '#85737655';
        const textColor = getContrastColor(newColor);
        card.querySelectorAll('.project-title, .project-description').forEach(el => {
            el.style.color = textColor;
        });


        const btn = card.querySelector('.btn-primary');
        if (btn) {
            if (textColor === '#ffffff') {
                btn.style.backgroundColor = 'rgba(0,0,0,0.7)';
                btn.style.borderColor = 'rgba(0,0,0,0.7)';
                btn.style.color = '#ffffff';
            } else {
                btn.style.backgroundColor = 'var(--primary-color)';
                btn.style.borderColor = 'var(--primary-color)';
                btn.style.color = '#ffffff';
            }
        }
        card.dataset.colorIndex = newIndex.toString();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    createFloatingShapes();
    createPhotoGallery();
    createProjectCards();
    createModals();
    setupContactForm();
    setupPortfolioColorChanger();
    setupProjectCardColorChanger();
});

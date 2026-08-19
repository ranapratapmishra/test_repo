const users = [
    {
        id: 1,
        name: "Ethan Walker",
        company: "PixelForge Studios",
        status: "Stranger",
        about: "Frontend developer passionate about creating beautiful and responsive web experiences.",
        avatar: "https://i.pravatar.cc/300?img=1",
        accounts: {
            github: "ethanwalker",
            linkedin: "ethan-walker",
            twitter: "@ethancode",
            instagram: "@ethan.design",
            website: "https://ethanwalker.dev"
        }
    },
    {
        id: 2,
        name: "Sophia Bennett",
        company: "CloudNova",
        status: "Stranger",
        about: "Cloud engineer who enjoys automating workflows and building scalable applications.",
        avatar: "https://i.pravatar.cc/300?img=5",
        accounts: {
            github: "sophiab",
            linkedin: "sophia-bennett",
            twitter: "@cloudsoph",
            instagram: "@soph.codes",
            website: "https://sophiab.dev"
        }
    },
    {
        id: 3,
        name: "Liam Carter",
        company: "NextGen AI",
        status: "Stranger",
        about: "AI enthusiast exploring LLMs, automation, and intelligent web applications.",
        avatar: "https://i.pravatar.cc/300?img=12",
        accounts: {
            github: "liamcarter",
            linkedin: "liam-carter",
            twitter: "@liamai",
            instagram: "@liam.dev",
            website: "https://liamai.dev"
        }
    },
    {
        id: 4,
        name: "Olivia Reed",
        company: "Creative Minds",
        status: "Stranger",
        about: "UI/UX designer who loves turning complex ideas into simple user experiences.",
        avatar: "https://i.pravatar.cc/300?img=9",
        accounts: {
            github: "oliviareed",
            linkedin: "olivia-reed",
            twitter: "@oliviadesigns",
            instagram: "@olivia.ui",
            website: "https://olivia.design"
        }
    },
    {
        id: 5,
        name: "Noah Mitchell",
        company: "DevStack Labs",
        status: "Stranger",
        about: "Full-stack JavaScript developer building modern web applications.",
        avatar: "https://i.pravatar.cc/300?img=15",
        accounts: {
            github: "noahmitchell",
            linkedin: "noah-mitchell",
            twitter: "@stacknoah",
            instagram: "@dev.noah",
            website: "https://noahstack.dev"
        }
    },
    {
        id: 6,
        name: "Emma Collins",
        company: "BrightApps",
        status: "Stranger",
        about: "Mobile app developer focused on creating smooth Android and iOS experiences.",
        avatar: "https://i.pravatar.cc/300?img=20",
        accounts: {
            github: "emmacollins",
            linkedin: "emma-collins",
            twitter: "@emmaapps",
            instagram: "@emma.mobile",
            website: "https://emmaapps.dev"
        }
    },
    {
        id: 7,
        name: "James Parker",
        company: "CyberShield",
        status: "Stranger",
        about: "Cybersecurity analyst interested in ethical hacking and digital privacy.",
        avatar: "https://i.pravatar.cc/300?img=18",
        accounts: {
            github: "jparker",
            linkedin: "james-parker",
            twitter: "@securejames",
            instagram: "@cyber.james",
            website: "https://securejames.dev"
        }
    },
    {
        id: 8,
        name: "Ava Morgan",
        company: "DataVista",
        status: "Stranger",
        about: "Data analyst transforming raw data into meaningful business insights.",
        avatar: "https://i.pravatar.cc/300?img=32",
        accounts: {
            github: "avamorgan",
            linkedin: "ava-morgan",
            twitter: "@datava",
            instagram: "@ava.analytics",
            website: "https://avamorgan.dev"
        }
    },
    {
        id: 9,
        name: "Benjamin Scott",
        company: "Quantum Tech",
        status: "Stranger",
        about: "Backend engineer building APIs, microservices, and distributed systems.",
        avatar: "https://i.pravatar.cc/300?img=25",
        accounts: {
            github: "benscott",
            linkedin: "benjamin-scott",
            twitter: "@backendben",
            instagram: "@ben.codes",
            website: "https://benscott.dev"
        }
    },
    {
        id: 10,
        name: "Mia Thompson",
        company: "Visionary Labs",
        status: "Stranger",
        about: "Product designer blending creativity and technology to solve real-world problems.",
        avatar: "https://i.pravatar.cc/300?img=47",
        accounts: {
            github: "miathompson",
            linkedin: "mia-thompson",
            twitter: "@miavision",
            instagram: "@mia.designs",
            website: "https://miathompson.dev"
        }
    }
];

var img= document.querySelector("img");
var hero = document.querySelector(".hero");

function createUserCard(users) {
    hero.innerHTML = "";

    users.forEach((user, idx) => {
        hero.innerHTML += `
           <div class="card">
                <button class= "status" id="${idx}" >${user.status}</button>
                <img src="${user.avatar}" alt="${user.name}" style="border: ${user.status === 'Friend' ? '.3rem solid lightgreen' : ''};">
                <h5>${user.name}</h5>
                <p class ="company">${user.company}</p>
                <div class="about">
                    <p class="Box">${user.about}</p>
                </div>
                <div class="account">
                    ${user.accounts.github ? `<a href="https://github.com/${user.accounts.github}" target="_blank" rel="noopener noreferrer"><i class="ri-github-line"></i></a>` : ''}
                    ${user.accounts.linkedin ? `<a href="https://linkedin.com/in/${user.accounts.linkedin}" target="_blank" rel="noopener noreferrer"><i class="ri-linkedin-line"></i></a>` : ''}
                    ${user.accounts.twitter ? `<a href="https://twitter.com/${user.accounts.twitter}" target="_blank" rel="noopener noreferrer"><i class="ri-twitter-line"></i></a>` : ''}
                    ${user.accounts.instagram ? `<a href="https://instagram.com/${user.accounts.instagram}" target="_blank" rel="noopener noreferrer"><i class="ri-instagram-line"></i></a>` : ''}
                    ${user.accounts.website ? `<a href="${user.accounts.website}" target="_blank" rel="noopener noreferrer"><i class="ri-global-line"></i></a>` : ''}
                </div>
                <button class ="portfolio"><i class="ri-user-line"></i>view profile</button>
            </div>  `;
    });
}

createUserCard(users);

hero.addEventListener("click", function (elam) {
    var gold = users[elam.target.id];
    gold.status = gold.status === "Stranger" ? "Friend" : "Stranger";
    // img.style.border = ".3rem solid green";
    // gold.img.style.border = ".3rem solid green";
    createUserCard(users);

}); 

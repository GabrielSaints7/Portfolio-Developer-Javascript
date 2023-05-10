function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerHTML = profileData.name

    const job = document.getElementById('profile.job')
    job.innerHTML = profileData.job

    const location = document.getElementById('profile.location')
    location.innerHTML = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerHTML = profileData.email
    email.href = `mailto:${profileData.email}`

}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map((skills) => `<li>${skills}</li>`).join('')
}
function updateHardSkills(profileData) {
    let num = 0

    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map((skills) => `
    <li>
        <img id="${skills.name}" alt="${skills.name}" src="${skills.logo}" class="hardLogos div${num += 1}"></img>
    </li>
    </img>`).join('')
}

function updateLanguege(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map((languages) => `
        <li>${languages}</li>
    `).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map((portfolio) => `
    <li>
        <h3 ${portfolio.github ? 'class="github"' : ''}>${portfolio.name}</h3>
        <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
    </li>
    `).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.experience')
    experience.innerHTML = profileData.experience.map((experience) =>
        `<li>
        <h3 class="title">${experience.name}</h3>
        <span class="data">${experience.period}</span>
        <p>${experience.description}</p>
    </li>`
    ).join(``)
}


(async () => {
    const profileData = await fetchProfileDetail()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguege(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()
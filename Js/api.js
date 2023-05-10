async function fetchProfileDetail() {
    url = `https://raw.githubusercontent.com/GabrielSaints7/js-developer-portfolio-Data/main/data/profile.json`

    const fetching = await fetch(url)
    return await fetching.json();

}


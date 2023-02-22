const lightTheme = {
    highlight: 'white',
    primary: 'white',
    secondary: 'black',
    shadow: 'grey',
    textPrimary: 'black',
    textSecondary: 'white',
}
const darkTheme = {
    highlight: 'black',
    primary: 'black',
    secondary: 'white',
    shadow: 'grey',
    textPrimary: 'white',
    textSecondary: 'black',
}

export const themeSetter = (theme) =>{
    const themeObj = theme==='light'?lightTheme:darkTheme

    var r = document.querySelector(':root');
    r.style.setProperty('--highlight', themeObj.highlight);
    r.style.setProperty('--primary', themeObj.primary);
    r.style.setProperty('--secondary', themeObj.secondary);
    r.style.setProperty('--shadow', themeObj.shadow);
    r.style.setProperty('--text-primary', themeObj.textPrimary);
    r.style.setProperty('--text-secondary', themeObj.textSecondary);
}
const palette = {
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    shipCove: "#6D93BE",
    scienceBlue: "#0366D6",
    dodgerBlue: "#2188FF",
    mercury: "#E5E5E5",
    whiteLilac: "#FBFBFE",
    white: "#FFFFFF",
    iron: "#d1d5da",
    violet: "#090a33",
}

const common = {
    breakpoints: {
        tabletLandscape: "1024px",
        tabletPortrait: "767px",
        phone: "320px",
    },
    transitions: {
        short: "0.3s",
        mid: "0.5s",
        long: "1s",
    },
    defaultColors: {
        themeShade: "default",
        themeColor: "default",
        lineDecoration: palette.iron,
        buttonTextColor: palette.white,
        buttonShadow: palette.shipCove,
        info: palette.slateGray,
        linkColor: palette.dodgerBlue,
        linkColorHover: palette.scienceBlue,
        pageBackground: palette.whiteLilac,
        primary: palette.scienceBlue,
        shadowA: palette.violet, 
        shadowB: palette.violet,
        textColor: palette.mineShaft,
        tileBackground: palette.white,
        tileBorder: palette.iron,
        tileBorderHover: palette.scienceBlue,
        tileTextColor: palette.slateGray,
    }
}

const shades = {
    light: {
        themeShade: "light",
    },
    dark: {
        themeShade: "dark",
        
    }
}

const colorThemes = {
    blue: {
        themeColor: "blue",
    },
    red: {
        themeColor: "red",
    }
}

const themeConstructor = (shade, color) => {
    const chosenShade = shades[shade] || shades.light;
    const chosenColor = colorThemes[color] || colorThemes.blue;
    return {
        breakpoints: common.breakpoints,
        transitions: common.transitions,
        colors: {
            ...common.defaultColors,
            ...chosenShade,
            ...chosenColor,
        }
    };
}

export default themeConstructor;
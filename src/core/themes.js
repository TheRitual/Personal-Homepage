export const names = {
    red: "red",
    blue: "blue",
    dark: "dark",
    light: "light",
}

const palette = {
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    darkGray: "#4b4b4b",
    shipCove: "#6D93BE",
    scienceBlue: "#0366D6",
    dodgerBlue: "#2188FF",
    mercury: "#E5E5E5",
    whiteLilac: "#FBFBFE",
    white: "#FFFFFF",
    iron: "#d1d5da",
    violet: "#090a33",
    rossoCorsa: "#ff0d19",
    dodgerRed: "#e66173",
}

const common = {
    themes: {
        colors: [
            { name: names.blue, color: palette.scienceBlue },
            { name: names.red, color: palette.rossoCorsa },
        ],
        shades: [
            { name: names.dark, color: palette.mineShaft },
            { name: names.light, color: palette.white },
        ],
    },
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
        titleColor: palette.mineShaft,
    }
}

const shades = {
    light: {

    },
    dark: {
        pageBackground: palette.mineShaft,
        info: palette.whiteLilac,
        tileTextColor: palette.iron,
        textColor: palette.whiteLilac,
        tileBackground: palette.darkGray,
        titleColor: palette.mercury,
    }
}

const colorThemes = {
    blue: {},
    red: {
        primary: palette.rossoCorsa,
        tileBorderHover: palette.rossoCorsa,
        linkColor: palette.dodgerRed,
        linkColorHover: palette.rossoCorsa,
    }
}

const themeConstructor = (shade, color) => {
    const chosenShade = shades[shade] || shades.light;
    const chosenColor = colorThemes[color] || colorThemes.blue;
    return {
        themes: common.themes,
        breakpoints: common.breakpoints,
        transitions: common.transitions,
        colors: {
            ...common.defaultColors,
            ...chosenShade,
            ...chosenColor,
        },
    };
}

export default themeConstructor;
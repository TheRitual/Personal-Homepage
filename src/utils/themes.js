const palette = {
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    scienceBlue: "#0366D6",
    dodgerBlue: "#2188FF",
    mercury: "#E5E5E5",
    whiteLilac: "#FBFBFE",
    white: "#FFFFFF",
    ironA01: "rgba(209, 213, 218, 0.1)",
    mineShaftA072: "rgba(54, 54, 54, 0.72)",
    violetA02: "rgba(9, 10, 51, 0.02)",
    violetA03: "rgba(9, 10, 51, 0.03)",
    scienceBlueA05: "rgba(3, 102, 214, 0.5)",
    scienceBlueA02: "rgba(3, 102, 214, 0.2)",
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
        pageBackground: palette.whiteLilac,
        textColor: palette.mineShaft,
        tileBackground: palette.white,
        shadowA: palette.violetA02,
        shadowB: palette.violetA03,
        primaryColor: palette.scienceBlue,
        tileBorder: palette.ironA01,
        tileBorderHover: palette.scienceBlueA02,
        tileTextColor: palette.slateGray,
        linkColor: palette.dodgerBlue,
        linkColorHover: palette.scienceBlue,
        info: palette.slateGray,
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
const palette = {
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    shipCove: "#6D93BE",
    scienceBlue: "#0366D6",
    dodgerBlue: "#2188FF",
    mercury: "#E5E5E5",
    whiteLilac: "#FBFBFE",
    white: "#FFFFFF",
    ironA01: "rgba(209, 213, 218, 0.1)",
    ironA03: "rgba(209, 213, 218, 0.3)",
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
        buttonBorderColor: palette.ironA03,
        buttonColor: palette.scienceBlue,
        buttonTextColor: palette.white,
        buttonShadow: palette.shipCove,
        info: palette.slateGray,
        linkColor: palette.dodgerBlue,
        linkColorHover: palette.scienceBlue,
        pageBackground: palette.whiteLilac,
        primaryColor: palette.scienceBlue,
        shadowA: palette.violetA02,
        shadowB: palette.violetA03,
        textColor: palette.mineShaft,
        tileBackground: palette.white,
        tileBorder: palette.ironA01,
        tileBorderHover: palette.scienceBlueA02,
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
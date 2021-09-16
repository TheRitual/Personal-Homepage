const palette = {
    mineShaft: "#252525",
    semiMineShaft: "#363636B7",
    semiIron: "#D1D5DA19;",
    scienceBlue: "#0366D6",
    slateGray: "#6E7E91",
    mercury: "#E5E5E5",
    whiteLilac: "#FBFBFE",
    white: "#FFFFFF",
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
    colors: {

    }
}

const shades = {
    light: {
        pageBackground: palette.whiteLilac,
        textColor: palette.mineShaft,
    },
    dark: {
    }
}

const colorThemes = {
    blue: {
        primaryColor: palette.scienceBlue,
    },
    red: {
    }
}

const themeConstructor = (shade, color) => {
    const chosenShade = shades[shade] || shades.light;
    const chosenColor = colorThemes[color] || colorThemes.blue;
    return {
        breakpoints: common.breakpoints,
        transitions: common.transitions,
        colors: {
            ...common.colors,
            ...chosenShade,
            ...chosenColor,
        }
    };
}

export default themeConstructor;
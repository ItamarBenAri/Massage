class AppComponentsStyle {
    
    // General App Style:
    public static navLink = {
        textDecoration: 'none',
        color: 'black',
    };

    public static divider = { margin: "10px" };

    public static circularProgress = { 
        display: 'flex', 
        justifyContent: "center", 
        margin: "24px 0 24px 0" 
    };

    public static scrollToUpBtn = { 
        fontSize: 40, 
        stroke: "#FFFFFF", 
        strokeWidth: 0.7  
    }

    public static header = {
        display: "flex", 
        alignItems: "flex-end", 
        justifyContent: "center",  
        marginBottom: "20px" 
    };

    public static headerIcon = { position: 'relative', top: '5px'};

    public static headerText = { marginLeft: "13px" };
    
    // ----------------------------------------------------------
    
    // Menu Style:
    public static menuAppBar = {
        backgroundColor: '#6b4423',
        position: "fixed"
    };

    public static menuSpaMd = {
        display: {
            xs: 'none',
            md: 'flex'
        },
        mr: 1
    };

    public static menuTypographyCompanyNameMd = {
        mr: 2,
        display: {
            xs: 'none',
            md: 'flex'
        },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    };

    public static menuAppPages = {
        display: {
            xs: 'block',
            md: 'none',
            textTransform: 'capitalize'
        },
    };

    public static navLinkPages = { 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center'
    };

    public static menuSpaXs = {
        display: {
            xs: 'flex',
            md: 'none'
        },
        mr: -5
    };

    public static menuAppMenu = {
        flexGrow: 1,
        display: {
            xs: 'flex',
            md: 'none'
        },
    };

    public static menuTypographyCompanyNameSm = {
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none'
    };

    public static menuPages = {
        flexGrow: 1,
        display: {
            xs: 'none',
            md: 'flex'
        }
    };

    public static menuPagesLink = { textDecoration: 'none' };
    
    // ----------------------------------------------------------
    
    // Floating Button Style:
    public static floatingBtnFab = { bottom: 84, right: -35 };

    public static floatingBtnSms = { transform: "scaleX(-1)" };

    public static floatingBtnWtpAction = { backgroundColor: "#25D366", marginRight: "45px" };

    public static floatingBtnTelAction = { backgroundColor: "rgb(25, 118, 210)", marginRight: "45px" };

    // ----------------------------------------------------------

    // Contact Us Form Style:
    public static contactUsHeaderIcon = { paddingBottom: "7px" };

    public static contactUsTextField = {
        display: "block",
        marginBottom: "10px",
    };

    public static contactUsReCAPTCHA = { 
        marginBottom: "10px", 
        display: "flex", 
        justifyContent: "right" 
    };

    // ----------------------------------------------------------

    // Card Style:
    public static cardFrontDetails = {
        position: 'relative', 
        top: '5px', 
        marginLeft: "5px"
    }

    public static cardFrontMoreDetails = {
        fontSize: "15px", 
        position: 'relative', 
        top: '1px', 
        marginLeft: "2px"
    }

    public static cardBackPrice = {
        position: 'relative', 
        top: '5px'
    }

    // ----------------------------------------------------------

    // Copyrights Style:
    public static copyrightsMainBox = {
        backgroundColor: "#EEEEEE",
        p: 6
    };

    public static copyrightsLink = {
        pl: 1,
        pr: 1
    };
};

export default AppComponentsStyle;

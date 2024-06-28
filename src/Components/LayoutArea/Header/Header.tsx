import { Collections, ContactMail, Home, Info, MedicalServices, Spa } from "@mui/icons-material";
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import AppMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";

function Header(): JSX.Element {
    // Defined component variables:
    const pages = [ // App pages
        { name: "דף הבית", link: "home", icon: <Home /> },
        { name: "השירותים שלנו", link: "services", icon: <MedicalServices /> },
        { name: "אודותינו", link: "about-us", icon: <Info /> },
        { name: "גלריה", link: "gallery", icon: <Collections /> },
        { name: "צור קשר", link: "contact-us", icon: <ContactMail /> }
    ];
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const activeBtnStyle = {
        my: 2,
        color: 'white',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        "&:hover": {
            color: "rgb(212,207,207)",
            textDecoration: "underline",
            textUnderlineOffset: "10px"
        }
    };
    
    // Event of open and close pages menu:
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div className="Menu">
            <AppBar sx={AppComponentsStyle.menuAppBar}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Spa sx={AppComponentsStyle.menuSpaMd} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            onClick={()=> navigate("/home")}
                            sx={AppComponentsStyle.menuTypographyCompanyNameMd}
                        >
                            אתר מסאג'
                        </Typography>
                            <Box sx={AppComponentsStyle.menuAppMenu}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <AppMenu
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={AppComponentsStyle.menuAppPages}
                                >
                                    {pages.map((page) => (
                                        <NavLink to={"/" + page.link} key={page.name} style={AppComponentsStyle.navLink}>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography sx={AppComponentsStyle.navLinkPages}>{page.icon} &nbsp; {page.name}</Typography>
                                            </MenuItem>
                                        </NavLink>
                                    ))}
                                </AppMenu>
                            </Box>
                        <Spa sx={AppComponentsStyle.menuSpaXs} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            onClick={()=> navigate("/home")}
                            sx={AppComponentsStyle.menuTypographyCompanyNameSm}
                        >
                            אתר מסאג'
                        </Typography>
                        <Box sx={AppComponentsStyle.menuPages}>
                                {pages.map((page) => (
                                    <NavLink to={"/" + page.link} key={page.name} style={AppComponentsStyle.menuPagesLink}>
                                        {({ isActive }) => ( // Style active link
                                            <Button
                                                onClick={handleCloseNavMenu}
                                                sx={{ ...activeBtnStyle, ...(isActive && { color: 'rgb(172,172,172)' }) }}
                                            >
                                                {page.icon} &nbsp;{page.name}
                                            </Button>
                                        )}
                                    </NavLink>
                                ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;

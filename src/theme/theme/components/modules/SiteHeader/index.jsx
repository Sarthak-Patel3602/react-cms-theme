import MenuComponent from '../../components/MenuComponent/index.jsx?island';
import { Button } from '../../components/ButtonComponent/ButtonComponent.jsx';
import StyledComponentsRegistry from '../../components/StyledComponentsRegistry/StyledComponentsRegistry.jsx';
import { styled } from 'styled-components';
import MobileMenuIsland from './islands/MobileMenuIsland.jsx?island';
import MobileLogoBackButton from './islands/MobileLogoBackButton.jsx?island';
import StyledIsland from '../../components/StyledComponentsRegistry/StyledIsland.jsx';
import { logInfo, SharedIslandState, useLanguageVariants } from '@hubspot/cms-components';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget } from '../../utils/content-fields.jsx';

const MOBILE_BREAKPOINT_NO_LANG_SWITCHER = '1100px';
const MOBILE_BREAKPOINT_WITH_LANG_SWITCHER = '1215px';

const SiteHeader = styled.div`
   width: 100%;
  height: auto;
  position: relative;
  z-index: 10;
  padding-block: 24px;

  
`;

const SiteHeaderContainer = styled.div`
  max-width: var(--container_width);
      padding: 0 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

const MainNav = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .menu {
    display: flex; 
    align-items: center; 
    margin: 0px;    
    list-style: none;
    padding: 0;
    margin: 0;

    .menu__submenu {
      list-style: none;
      padding: 0;
      margin: 0;
      min-width: 210px;
      background-color: var(--header_bgColor)
    }
      .menu--has-children {
          position: relative;
      }
      gap: 10px;

      @media (min-width: 800px) {
        gap: 10px;
      }

      @media (min-width: 900px) {
        gap: 10px;
      }
    }

  li {
    
    

   

    &[data-menuitem-depth='2'] {
      .menu__arrow {
        right: 8px;
        display: inline-flex;
        align-items: center;
      }
    }

    .menu__arrow {
          pointer-events: none;
        position: relative;
        right: 12px;
        margin: 0;
        display: inline-flex;
        transform: translateY(0%) rotate(90deg);

      .menu__arrow-path {
       
      }
    }
  }

  ul {
   
  }

  // All submenus and hover element
  .menu__menu-item-link-container {
   
  }

  [data-menuitem-depth='1'] {
    > .menu__menu-item-link-container:hover {
    
    }

    li .menu__menu-item-link-container:hover {
     
    }

    > ul {
      filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.05));
    }

    > .menu__menu-item-link-container {
      > .menu__arrow {
            margin-left: 10px;
      }
    }

    // Adjust the behavior of the right most flyouts
    @media (max-width: 1100px) {
      &:last-of-type {
        > ul {
          right: 0;
          left: initial;

          ul {
            left: initial;
            right: calc(100% + 12px);
          }
        }
      }
    }
  }

  @media (max-width: ${props => props.$mobileBreakpoint}) {
    display: none;
  }


  
`;

const LanguageSwitcherContainer = styled.div`
  @media (max-width: ${props => props.$mobileBreakpoint}) {
    display: none;
  }
`;


const ButtonContainer = styled.div`
  display: none;

  @media (min-width: 460px) {
    margin-left: auto;
    flex: 0 0 auto;
    display: block;
  }
`;

const MobileMenuContainer = styled.div`
display: none;
  @media (max-width: ${props => props.$mobileBreakpoint}) {
    display: block;
  }
`;

const LogoButtonContainer = styled.div`
  flex: 0 0 auto;
  margin-right: auto;
`;

export const Component = (props) => {
  const {
    hublData: {
      navigation: { children: navDataArray = [] },
      companyName,
      defaultLogo,
      logoLink,
    },
    groupLogo: { logo: logoField },
    defaultContent: { logoLinkAriaText, languageSwitcherSelectText },
    groupButton,
    styles,
  } = props;
// logInfo(props)
  const {
    showButton,
    buttonContentText: buttonText,
    buttonContentLink: buttonLink,
    buttonContentShowIcon: showIcon,
    buttonContentIconPosition: iconPosition,
    buttonContentType
  } = groupButton;

  defaultLogo.suppress_company_name = logoField.suppress_company_name;
  const logoToUse = logoField.override_inherited_src ? logoField : defaultLogo;

  const {
    groupMenu: {
      menuAlignment
    
    },
    groupButton: { buttonStyleVariant, buttonStyleSize },
  } = styles;

  const translations = useLanguageVariants();
  const showLanguageSwitcher = translations?.length > 1;
  const langSwitcherIconFieldPath = 'globe_icon';

  const mobileBreakpoint = showLanguageSwitcher ? MOBILE_BREAKPOINT_WITH_LANG_SWITCHER : MOBILE_BREAKPOINT_NO_LANG_SWITCHER;


  // logInfo(props)
  return (
    <StyledComponentsRegistry>
      <SiteHeader className="site-header header" $navBarBackgroundColor={''} $mobileBreakpoint={mobileBreakpoint}>
        <SharedIslandState value={[]}>
          <SiteHeaderContainer>
            <LogoButtonContainer>
              <StyledIsland
                module={MobileLogoBackButton}
                logoField={logoToUse}
                companyName={companyName}
                logoLinkAriaText={logoLinkAriaText}
                logoLink={logoLink}
              />
            </LogoButtonContainer>
            <MainNav
              $mobileBreakpoint={mobileBreakpoint}
              className="header__main-nav header__menu"
            >
              <StyledIsland
                module={MenuComponent}
                menuDataArray={navDataArray}
                flow="horizontal"
                menuAlignment={menuAlignment}
                maxDepth={3}
                navigationAriaLabel="Main navigation"
                flyouts={true}
                wrapperStyle={{ flex: '1 0 100%' }}
                additionalClassArray={['header__main-nav-menu']}

              />
            </MainNav>

              

            {buttonContentType && (
              <ButtonContainer className="header__button-container">
                <Button
                  href={getLinkFieldHref(buttonLink)}
                  buttonStyle={buttonStyleVariant}
                  buttonSize={buttonStyleSize}
                  target={getLinkFieldTarget(buttonLink)}
                  rel={getLinkFieldRel(buttonLink)}
                  showIcon={showIcon}
                  iconFieldPath="groupButton.buttonContentIcon"
                  iconPosition={iconPosition}
                  ctaFieldpath={`groupButton.ctaField`}
                  buttonType={buttonContentType}
                  additionalClassArray={['header__button']}
                >
                  {buttonText}
                </Button>
              </ButtonContainer>
            )}

            <MobileMenuContainer className="header__mobile-menu-container" $mobileBreakpoint={mobileBreakpoint}>
              <StyledIsland
                module={MobileMenuIsland}
                menuDataArray={navDataArray}
                flow="horizontal"
                maxDepth={3}
                menuAlignment={menuAlignment}
                navigationAriaLabel="Main mobile navigation"
                flyouts={true}
                buttonStyleVariant={buttonStyleVariant}
                buttonStyleSize={buttonStyleSize}
                groupButton={groupButton}
                hublData={props.hublData}
                
              />
            </MobileMenuContainer>
          </SiteHeaderContainer>
        </SharedIslandState>
      </SiteHeader>
    </StyledComponentsRegistry>
  );
};

export { fields } from './fields.jsx';

export const hublDataTemplate = `
  {% set hublData = {
      "navigation": menu(module.groupNavigation.menu, "site_root"),
      "companyName": branding_company_name,
      "logoLink": brand_settings.primaryLogo.link,
      "defaultLogo": {
        "src": brand_settings.primaryLogo.src,
        "alt": brand_settings.primaryLogo.alt,
        "width": brand_settings.primaryLogo.width,
        "height": brand_settings.primaryLogo.height
      }
    }
  %}
`;

export const meta = {
  label: 'Site header',
  content_types: ['BLOG_LISTING', 'BLOG_POST', 'SITE_PAGE', 'LANDING_PAGE'],
};


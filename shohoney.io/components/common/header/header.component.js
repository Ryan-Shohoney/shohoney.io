import { Client, LinkResolver } from '../../../prismic-configuration';
import { RichText } from 'prismic-reactjs';
import PrismicLink from '../../prismic/link/link.prismic.component';

function Header({ data }) {
  const navItems = data.body.map(b => {
    return {
      topLevelItem: b.primary,
      subLinks: [...b.items]
    }
  });
  return (
    <header>
      <img src={data.site_logo.url} alt={data.site_logo.alt} />
      <ul className="space-x-2">
        {navItems.map((navItem, index) => (
          <li key={index}>
            <PrismicLink link={navItem.topLevelItem.navigation_link} >
              <a>
                {RichText.render(navItem.topLevelItem.link_label, LinkResolver)}
              </a>
            </PrismicLink>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
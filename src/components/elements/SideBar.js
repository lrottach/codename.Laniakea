import React from "react";
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

const SidebarMenu = ({groups, expanded, collapsed}) => (
    <div className="Sidebarmenu">
        <Nav groups={}
            expandedStateText={expanded}
            collapsedStateText={collapsed}
        />
    </div>
)

SidebarMenu.props = {
    groups: INavLinkGroup,
    expanded: T.string,
    collapsed: T.string,
}

SidebarMenu.defaultProps = {
    groups: [{
        links: [{
            name: 'Home',
            url: 'http://example.com',
            links: [{
                name: 'Getting Started',
                url: 'http://msn.com',
            }, {
                name: 'About',
                url: 'http://msn.com',
            }],
            isExpanded: true,
        }, {
            name: 'Configuration',
            url: 'http://example.com',
            links: [{
                name: 'Configuration Profiles',
                url: 'http://example.com',
            }, {
                name: 'PowerShell Scripts',
                url: 'http://exmaple.com',
            }],
            isExpanded: true,
        }]
    }],
    expanded: 'expanded',
    collapsed: 'collapsed',
}

export default SidebarMenu
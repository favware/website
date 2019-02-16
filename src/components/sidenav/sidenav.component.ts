import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { ASSET_BASE_PATH, ISidenavLink } from '../../util';

@Component({
    selector: 'favware-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})

export class SidenavComponent implements OnInit {
    public sidenavMode = 'side';
    public isFixedInViewport = false;
    public isSidenavOpen = false;
    public isSidenavClosable = true;
    public isSmall = false;

    public readonly items: ISidenavLink[] = [
        {
            routerLink: '.',
            label: 'Home',
            image: `${ASSET_BASE_PATH}/website-project-icons/home.png`,
        },
        {
            routerLink: '/ribbon',
            label: 'Ribbon',
            image: `${ASSET_BASE_PATH}/website-project-icons/ribbon.png`,
        },
        {
            routerLink: '/ribbonzone',
            label: 'RibbonZone',
            image: `${ASSET_BASE_PATH}/website-project-icons/ribbonzone.png`,
        },
        {
            routerLink: '/sentience',
            label: 'Sentience',
            image: `${ASSET_BASE_PATH}/website-project-icons/sentience.png`,
        },
        {
            routerLink: '/dexa',
            label: 'Dexa',
            image: `${ASSET_BASE_PATH}/website-project-icons/dexa.png`,
        },
        {
            routerLink: '/seedcheck',
            label: 'SeedChecker',
            image: `${ASSET_BASE_PATH}/website-project-icons/seedcheck.png`,
        },
        {
            routerLink: '/convertbot',
            label: 'ConvertBot',
            image: `${ASSET_BASE_PATH}/website-project-icons/convertbot.png`,
        },
        {
            routerLink: '/catchcalc',
            label: 'CatchCalc',
            image: `${ASSET_BASE_PATH}/website-project-icons/catchcalc.png`,
        },
        {
            routerLink: '/tava',
            label: 'Ta\'Va',
            image: `${ASSET_BASE_PATH}/website-project-icons/tava.png`,
        },
        {
            routerLink: '/unescape',
            label: 'Unescape-ES6',
            image: `${ASSET_BASE_PATH}/website-project-icons/unescape.png`,
        },
        {
            routerLink: '/querystring',
            label: 'Awesome Querystring',
            image: `${ASSET_BASE_PATH}/website-project-icons/querystring.png`,
        },
        {
            routerLink: '/converter',
            label: 'Awesome Converter',
            image: `${ASSET_BASE_PATH}/website-project-icons/converter.png`,
        },
        {
            routerLink: '/contact',
            label: 'Contact',
            image: `${ASSET_BASE_PATH}/website-project-icons/contact.png`,
        }
    ];
    private readonly breakpointObserver: BreakpointObserver;

    private overlayContainer: OverlayContainer;

    constructor (breakpointObserver: BreakpointObserver, overlayContainer: OverlayContainer) {
        this.overlayContainer = overlayContainer;
        this.breakpointObserver = breakpointObserver;
    }

    ngOnInit () {
        this.breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
            .subscribe((state: BreakpointState) => {
                this.isSmall = state.matches;
                if (state.matches) {
                    this.isFixedInViewport = true;
                    this.isSidenavClosable = true;
                    this.isSidenavOpen = false;
                    this.sidenavMode = 'over';
                } else {
                    this.isFixedInViewport = false;
                    this.isSidenavClosable = false;
                    this.isSidenavOpen = true;
                    this.sidenavMode = 'side';
                }
            });
    }
}

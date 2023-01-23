import React from 'react'
import App from './App'
import {BrowserProviderDecorator, ReduxStoreProviderDecorator} from "../stories/decorators/ReduxStoreProviderDecorator"

export default {
    title: 'App Stories',
    component: App,
    decorators: [ReduxStoreProviderDecorator, BrowserProviderDecorator]
}

export const AppBaseExample = (props: any) => {
    return (<App demo={true} />)
}

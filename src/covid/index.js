import React from 'react';
import Countries from './components/Countries';
import Global from './components/Global';
import LayoutPage from './components/partials/Layout';
import CoronaProvider from './context/my-provider';
class Corona extends React.Component {
    render(){
        return(
            <LayoutPage>
                <CoronaProvider>
                    <Global />
                    <Countries />
                </CoronaProvider>           
            </LayoutPage>
        )
    }
}
export default Corona;
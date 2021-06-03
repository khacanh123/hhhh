import React,{useState} from 'react';
import IndexPage from '../components/Index';
const HookPage = () => {
    const [data, setData] = useState(0);
    const counter = () => {
        setData(data+2);
    }
    return(
        <React.Fregment>
            <IndexPage>
                <section>
                    <h1>index - {data}</h1>
                    <button onClick={counter}>Add</button>
                </section>
            </IndexPage>
        </React.Fregment>
    )
}
export default HookPage;
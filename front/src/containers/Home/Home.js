import React from 'react';
import CardAll from "../../components/UI/CardAll/CardAll";
import {Link} from "@mui/material";

const orders = [{"order_id": 1, "request_type": "video_auto", "status": "ready", "download_links": ["https://fakelink/link1.mp4"], "error_message": null, "expiry": 1676842923}, {"order_id": 2, "request_type": "video_files", "status": "processing", "download_links": [], "error_message": null, "expiry": 1676857323}, {"order_id": 3, "request_type": "video_files", "status": "error", "error_message": "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0445\u0432\u0430\u0442\u0430 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u043e\u0432", "download_links": [], "expiry": 1676900523}];

const Home = () => {

    return (
        <>
            <div style={{display: 'flex', flexWrap: 'wrap', fontSize: '50px', justifyContent: 'center', gap: '20px'}}>
                    {orders.map(order => (
                        <CardAll key={order.order_id}>
                            {order.error_message && <p style={{color: 'red'}}>{order.error_message}</p>}
                            <p>status: {order.status}</p>
                            <p>type: {order.request_type}</p>
                            <p>expiry: {order.expiry}</p>
                            <Link>{order.download_links.map(link => link)}</Link>
                        </CardAll>
                    ))}

            </div>
        </>
    );
};

export default Home;
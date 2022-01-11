import React from 'react';
import Card, {CardVariant} from "./Card";
import EventsExample from "./EventsExample";

const OtherPage = () => {
    return (
        <div>
            <Card
                height='200px'
                width='200px'
                variant={CardVariant.primary}
                onClick={(num) => console.log('click', num)}
            >
                <button>Button</button>
            </Card>
            <EventsExample/>
        </div>
    );
};

export default OtherPage;
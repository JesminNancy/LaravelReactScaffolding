//  import { Button } from 'bootstrap';
import { Button } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        
        <div>
        <Button className="btn btn-danger">React Bootstrap Button</Button>
        </div>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}

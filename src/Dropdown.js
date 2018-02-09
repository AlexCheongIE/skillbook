import React from 'react';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import MenuItem from 'material-ui/Menu';
import Select from 'material-ui/Select';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

// const numbers = [];
// for (let i = 0; i <= 10; i++){
//     numbers.push(<MenuItem value={i} key={i} primaryText={i} />);
// }

class RatingMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 10};
    }

    handleChange = (event, index, value) => this.setState({value});

    render(){
        
        const { classes } = this.props;

        return (
            <div>
                <InputLabel htmlFor="age-simple">Age</InputLabel>
                <Select 
                    value={this.state.age}
                    onChange={this.handleChange}
                    inputProp={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                    />
                <MenuItem value={this.state.value} />
            </div>
        );
    }

}

export default withStyles(styles)(RatingMenu);

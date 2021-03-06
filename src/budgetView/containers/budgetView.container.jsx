import React, { Component } from 'react';
import { Input } from 'react-materialize';
import BudgetGraph from '../components/BudgetGraph';
import { getBudget, updateBudget, updateGraph } from '../actions/budgetView.action';
import { reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';

class BudgetView extends Component {
  componentWillMount() {
    this.props.getBudget();
  }
  
  render() {
    const { fields: { newBudget }, handleSubmit } = this.props;
    return(
      <div>
        <form onSubmit={ handleSubmit(this.props.updateBudget) }>
          <Input type="number" placeholder="Budget" s={9} label="Budget" { ...newBudget } />
          <RaisedButton s={3} label="Update" type="submit" style={{"marginTop":"20px"}}/>
        </form>
        <BudgetGraph onClick={updateGraph} budget={this.props.budget} rooms={this.props.rooms}/>
      </div>
    );
  }
}

export default reduxForm({
  form: 'BudgetView',
  fields: ['newBudget']
}, state => ({ budget: state.budget, data: state.onClick}),{ getBudget, updateBudget, updateGraph })(BudgetView);


import React, {Component} from 'react';


export default class About extends Component {

  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>Farm-to-table synth godard ugh iPhone roof party. Tattooed sustainable meh pabst shoreditch meggings venmo, literally direct trade. Cardigan helvetica neutra williamsburg. Beard organic cold-pressed williamsburg. Put a bird on it DIY disrupt craft beer chicharrones, seitan tousled four loko ennui whatever pinterest pickled cold-pressed hammock. Dreamcatcher kale chips flexitarian everyday carry, yuccie pour-over post-ironic seitan cliche you probably haven't heard of them before they sold out fingerstache. Intelligentsia cray shabby chic meh aesthetic retro kale chips, jean shorts franzen.
        </p>
        <button onClick={this.setVar}>Sign Up</button>
      </div>
    )
  }
}
import './App.css';
import Step1 from './components/step1/step1'
import Step2 from './components/step2/step2'
import Step3 from './components/step3/step3'
import Step4 from './components/step4/step4'
import React from 'react'

export default class a extends React.Component {
  state = {
    step: 1
  }

  proximoPasso = () => {
    this.setState({ step: this.state.step + 1 })
    console.log(this.state.step);
  }



  render() {
    const steps = () => {
      if (this.state.step === 1) {
        return <Step1 />;
      } else if (this.state.step === 2) {
        return <Step2 />;
      } else if (this.state.step === 3) {
        return <Step3 />
      } else if (this.state.step === 4) {
        return <Step4 />
      } else {
        this.setState({step: 1})
        return <Step1 />
      }
    };

    return (
      <div className="App">
        {steps()}
        <button onClick={this.proximoPasso}>Próximo passo</button>
      </div>
    )
  }
}




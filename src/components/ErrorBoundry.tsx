import { Component, ErrorInfo } from 'react';


export class ErrorBoundry extends Component<{children: JSX.Element}, {hasError: boolean}> {
  constructor(props:any) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError) {
      return <h1>OOOps, something went wrong</h1>
    } 
    return <div>
      {this.props.children}
    </div>
  }
}
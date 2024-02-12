import React, { ReactElement } from 'react';
import s from './index.scss';
interface Props {
  children: ReactElement;
}

interface State {
  error: Error | undefined;
}
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return (
        <div className={s.container}>
          <div className={s.content}>
            <h1>Something went wrong.</h1>
            <p>{this.state.error.message}</p>
            <button onClick={() => location.reload()}>Retry</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

import withInnerWidth from './WithInnerWidth'

const MyComponent = ({ innerWidth }) => <div>innerWidth: {innerWidth}</div>


export default withInnerWidth(MyComponent)
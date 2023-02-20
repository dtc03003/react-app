import { Component } from 'react';
import PropsTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props;  // 비구조화 할당
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                childre 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
};

MyComponent.defaultProps = {
    name: '기본이름'
};

MyComponent.propTypes = {
    name: PropsTypes.string,
    favoriteNumber: PropsTypes.number.isRequired
};

export default MyComponent;
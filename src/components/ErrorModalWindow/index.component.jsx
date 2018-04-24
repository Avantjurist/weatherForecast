import React, { Component } from 'react';
import * as styles from './index.css';

export default class ErrorModalWindow extends Component {
    handleClick = () => {
        const { cleanErrors, history } = this.props;

        cleanErrors();
        history.goBack();
    };

    render() {
        return (
            this.props.errors.length ?
                <div className={styles.popup}>
                    <div className={styles.popupInner}>
                        <div className={styles.errorMassage}>
                            {`${this.props.errors[this.props.errors.length - 1].status}
                             (${this.props.errors[this.props.errors.length - 1].statusText})`}
                        </div>
                        <button
                            className={styles.errorButton}
                            onClick={this.handleClick}
                        >
                            ok
                        </button>
                    </div>
                </div>
                : null
        );
    }
}

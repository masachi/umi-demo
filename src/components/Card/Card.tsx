import React, { PropsWithChildren } from 'react';
import './Card.less'

interface CardProps {
    hasMax?: boolean,
    hasDelete?: boolean
}

const CardContainer: React.FC<PropsWithChildren<CardProps>> = (props) => {
  const { hasMax, hasDelete } = props;

  return (
    <div className={`card-container`}>
        <div className='operation-container'>
            {
                hasDelete &&
                <img className={'delete-icon'} src={require('@/assets/icon_delete.png')} />
            }
            {
                hasMax &&
                <img className={'max-icon'} src={require('@/assets/icon_max.png')} />
            }
        </div>
        <div className={'children-container'}>
            {props.children}
        </div>
    </div>
  );
};

export default CardContainer;

import React from 'react';
import styled from 'styled-components';
import { Disclosure } from '@headlessui/react';
import colors from '../Style/colors';
import Text from './Text';
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const Accordion = ({question, answer}) => {
  return (
    <AccordionComponent>
      <Disclosure className="accordion">
        {({ open }) => (
          <>
            <Disclosure.Button  className="button">
                <div className='question'>
                    <Text size="md" type='body' color={colors.neutral[950]}>{question}</Text>
                </div>
              {
                !open ? 
                    <div className='box-icon open'>
                        <PlusIcon className='dropdown-icon open' />
                    </div>
                :
                    <div className='box-icon close'>
                        <MinusIcon className="dropdown-icon" />
                    </div>
              }
            </Disclosure.Button>
            <Disclosure.Panel className="panel">
                <Text size="sm" type='body' color={colors.neutral[600]}>{answer}</Text>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
  </AccordionComponent>
  );
}

const AccordionComponent = styled.div`
    width: 100%;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding:20px ;
    background-color: white;

    .button {
        display: flex;
        width: 100%;
        justify-content: space-between;
        border-radius: 8px;
        background-color: white;
        align-items: center;
        text-align: left;
        border: 0;

        .question {
            width: 80%;
        }

        .dropdown-icon {
            width: 26px;
        }

        .box-icon.close {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            background-color: ${colors.primary[600]};
            color: white;
            cursor: pointer;

            &:hover {
                background-color: ${colors.primary[800]};
            }
        }

        .box-icon.open {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            background-color: ${colors.primary[100]};
            color: ${colors.primary[500]};
            cursor: pointer;

            &:hover {
                background-color: ${colors.primary[200]};
            }
        }

    }

    .panel {
        background-color: white;
        padding: 20px;
        text-align: left;
        border-radius: 0px 0px 8px 8px;
    }
`

export default Accordion;

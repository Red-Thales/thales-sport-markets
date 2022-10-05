import { Tooltip, withStyles } from '@material-ui/core';
import { MAIN_COLORS } from 'constants/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const AMMContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${MAIN_COLORS.LIGHT_GRAY};
    border-radius: 15px;
    width: 100%;
    margin-top: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const AMMContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 310px;
    margin: 0 auto;
`;

export const SubmitButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 310px;
    margin: 0 auto;
    margin-top: 19px;
`;

export const PrimaryLabel = styled.span`
    text-transform: uppercase;
    font-weight: 400;
    font-size: 15px;
    line-height: 22.5px;
    color: ${MAIN_COLORS.TEXT.BLUE};
    ::after {
        content: ':';
    }
`;

export const PrimaryValue = styled.span<{ color?: string }>`
    font-size: 15px;
    line-height: 22.5px;
    color: ${(_props) => (_props?.color ? _props.color : '')};
`;

export const SecondaryLabel = styled.span`
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    text-transform: uppercase;
    color: ${MAIN_COLORS.TEXT.WHITE};
    ::after {
        content: ':';
    }
`;

export const SecondaryValue = styled.span`
    font-size: 11px;
    line-height: 13px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const AmountToBuyContainer = styled.div`
    position: relative;
`;

export const AmountToBuyInput = styled.input`
    margin: 10px 0;
    border: 3px solid #3accfa;
    width: 100%;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    @media (max-width: 768px) {
        width: 130px;
        font-size: 15px;
    }
`;

export const MaxButton = styled.button`
    background: #3accfa;
    font-size: 10px;
    line-height: 12px;
    position: absolute;
    top: 16px;
    right: 5px;
    border: none;
    cursor: pointer;
`;

export const CustomTooltip = withStyles(() => ({
    tooltip: {
        minWidth: '100%',
        width: '100%',
        margin: '0',
        backgroundColor: '#FDB7B7',
        color: '#F30101',
        fontSize: '12px',
    },
}))(Tooltip);

export const SubmitButton = styled.button`
    background: #5fc694;
    border-radius: 5px;
    /* margin: 20px 100px; */
    font-size: 20px;
    line-height: 23px;
    color: #303656;
    width: 100%;
    border: none;
    padding: 7px;
    cursor: pointer;
    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

export const InputDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -5px;
`;

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PotentialProfitContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
`;

export const PotentialProfit = styled(PrimaryValue)`
    font-weight: 700;
    color: ${MAIN_COLORS.TEXT.POTENTIAL_PROFIT};
`;

export const CollateralInfoContainer = styled(PotentialProfitContainer)``;

export const CollateralInfo = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Collateral = styled(PrimaryValue)`
    font-weight: 700;
    margin-right: 5px;
`;

export const StableBalance = styled(PrimaryValue)`
    text-transform: uppercase;
`;

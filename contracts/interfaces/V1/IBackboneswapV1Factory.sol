pragma solidity >=0.5.0;

interface IBackboneswapV1Factory {
    function getExchange(address) external view returns (address);
}
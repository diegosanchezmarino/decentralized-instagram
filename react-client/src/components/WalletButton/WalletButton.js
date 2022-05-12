

export function WalletButton() {


    function onButtonPressed() {

    }

    return (
        <button
            onClick={() => { onButtonPressed() }}
            className='rounded p-1 border-solid border ml-5 border-gray-600'>
            Wallet
        </button>
    )
}
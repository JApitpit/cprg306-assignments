import Dogs from "./dogs";

export default function Page() 
{
    return (
        <div className="bg-indigo-500"> 
            <h1 className="text-4xl font-bold text-center">
                Dog List
            </h1>
            <Dogs name="Pochita" dog="Chainsaw-Dog" img="https://imgs.search.brave.com/mIw_lzUXX2TzBsUD8vj2Lnn5AKux4UpNw6feuujFCbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly95b3V0/b296LmNvbS9jZG4v/c2hvcC9wcm9kdWN0/cy8ydjVhNWszajZo/LnBuZz92PTE2ODQy/NjU2MTI">
            </Dogs>
            <Dogs name="Moo Deng" dog="Hippo Dog" img="https://imgs.search.brave.com/mQSMInyn37ipIP2rE3Xh6y28x5h6mvQWOKxM1s04Lys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubGlmZXN0eWxl/YXNpYS5jb20vd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzMv/MjAyNC8wOS8xMzE2/MjMyMC80NTkxMTgw/NjNfNTM5NTk3MTQ1/MjQ3MDQ3Xzg4NTM3/NDAzNTgyODg1OTAz/Mzlfbi01MDB4Mzc1/LmpwZw">
            </Dogs>
            <Dogs name="Scooby" dog="Coward Dog" img="https://imgs.search.brave.com/F3IHrK40pwWuuGHuDTxIdWHyEyQa3QCvnGYOdKCmI1M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhmL2Qx/L2ViLzhmZDFlYjQ0/YjM0YzI2Yjk4YjQz/ZWQwNjgwMWFiNjVj/LmpwZw">
            </Dogs>
        </div>
    );
}
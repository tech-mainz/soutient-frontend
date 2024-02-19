import React from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
const CreateCampaign = () => {
  const { contract } = useContract(
    "0x992bBF09331c07591DFdc903F127d8503D77582D"
  );
  const { mutateAsync: createCampaign, isLoading } = useContractWrite(
    contract,
    "createCampaign"
  );

  const call = async () => {
    try {
      const data = await createCampaign({
        args: [_owner, _title, _description, _target, _deadline, _image],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  console.log("Contract: ",contract)
  return (
    <div>
      <h1>hello contract creator</h1>
    </div>
  );
};

export default CreateCampaign;

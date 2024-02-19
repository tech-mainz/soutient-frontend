import { useState } from "react";
import { useContract, useContractWrite,Web3Button } from "@thirdweb-dev/react";
import { contractId } from "../../utils/urls";
import "./CreateCampaign.css";
 
export default function CreateCampaign() {
  const { contract } = useContract(contractId);
  const { mutateAsync: createCampaign, isLoading } = useContractWrite(
    contract,
    "createCampaign"
  );

  const [owner, setOwner] = useState(""); // assuming _owner is an address
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState(0);
  const [deadline, setDeadline] = useState(0); // assuming _deadline is a timestamp
  const [image, setImage] = useState("");

  const callCreateCampaign = async () => {
    try {
      // Convert deadline to UNIX timestamp (in seconds)
      const deadlineTimestamp = Math.floor(new Date(deadline).getTime() / 1000);

      const data = await createCampaign({
        args: [owner, title, description, target, deadlineTimestamp, image],
      });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        step=".01"
        placeholder="Target"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <input
        type="datetime-local"
        placeholder="Deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      {/* <button onClick={callCreateCampaign} disabled={isLoading}>
        {isLoading ? "Creating Campaign..." : "Create Campaign"}
      </button> */}
      <Web3Button
      contractAddress={contractId}
      action={(contract) => {
        callCreateCampaign();
      }}
    >
      createCampaign
    </Web3Button>
    </div>
  );
}

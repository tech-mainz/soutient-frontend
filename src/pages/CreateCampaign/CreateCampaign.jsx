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
    <div className="campaign__creation_main">
      <form className="campaign__creation_form">
        <div className="form_field">
      <label for="owner">Owner: </label>
      <input
        type="text"
        id="owner"
        // placeholder="Owner"
        name="owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      </div>
      <div className="form_field">
      <label for="title">Title: </label>
      <input
        type="text"
        id="title"
        name="title"
        // placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      <div className="form_field">
      <label for="description">Description: </label>
      <textarea
        id="description"
        name="description"
        // placeholder="Description"
        value={description}
        rows={7}
        cols={30}
        onChange={(e) => setDescription(e.target.value)}
      />
      </div>
      <div className="form_field">
      <label for="target">Target: </label>
      <input
        type="number"
        step=".01"
        id="target"
        name="target"
        // placeholder="Target"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      </div>
      <div className="form_field">
      <label for="deadline">Deadline: </label>
      <input
        type="datetime-local"
        id="deadline"
        name="deadline"
        // placeholder="Deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      </div>
      <div className="form_field">
      <label for="image">Image URL: </label>
      <input
        type="text"
        id="image"
        name="image"
        // placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      </div>
      <div className="campaign__creation_button">
      <Web3Button
      className="web3__button"
      contractAddress={contractId}
      action={(contract) => {
        callCreateCampaign();
      }}
    >
      createCampaign
    </Web3Button>
    </div>
    </form>
    </div>
  );
}

import { useContext, useState } from "react";
import { ethers } from "ethers";
import "./CreateCampaign.css";
import { maticUrl, contractId } from "../../utils/urls";
import { Abi } from "../../utils/abi";
import ConnectWalletButton from "../../components/ConnectWalletButton/ConnectWalletButton ";
import { UserContext } from "../../contexts/UserContext";
export default function CreateCampaign() {
  const { isAuthenticated } = useContext(UserContext);
  const provider = new ethers.providers.JsonRpcProvider(maticUrl);
  const contractAddress = contractId;
  const abi = Abi;
  const contract = new ethers.Contract(contractAddress, abi, provider);
  console.log("Contract obj: ", contract);
  const [owner, setOwner] = useState(""); 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState(0);
  const [deadline, setDeadline] = useState(0); 
  const [image, setImage] = useState("");
  async function createCampaign() {
    try {
      const tx = await contract.createCampaign(
        owner,
        title,
        description,
        target,
        deadline,
        image
      );

      // Wait for the transaction to be mined
      await tx.wait();

      // Transaction successful
      console.log("Campaign created successfully!");
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  }

  return (
    <div className="campaign__creation_main">
      <div className="campaign__creation_form">
        <div className="form_field">
          <label>Owner: </label>
          <input
            type="text"
            id=""
            // placeholder="Owner"
            name=""
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="form_field">
          <label>Title: </label>
          <input
            type="text"
            id=""
            name=""
            // placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form_field">
          <label>Description: </label>
          <textarea
            id=""
            name=""
            // placeholder="Description"
            value={description}
            rows={7}
            cols={30}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form_field">
          <label>Target: </label>
          <input
            type="number"
            step=".01"
            id=""
            name=""
            // placeholder="Target"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
        <div className="form_field">
          <label>Deadline: </label>
          <input
            type="datetime-local"
            id=""
            name=""
            // placeholder="Deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div className="form_field">
          <label>Image URL: </label>
          <input
            type="text"
            id=""
            name=""
            // placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="campaign__creation_button">
          {isAuthenticated ? (
            <button
              onClick={() => {
                createCampaign();
              }}
            >
              Submit
            </button>
          ) : (
            <ConnectWalletButton />
          )}
        </div>
      </div>
    </div>
  );
}

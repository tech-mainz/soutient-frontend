import { useContext, useState } from "react";
import { ethers } from "ethers";
import "./CreateCampaign.css";
import { maticUrl, contractId as contractAddress } from "../../utils/urls";
import { Abi } from "../../utils/Abi";
import ConnectWalletButton from "../../components/ConnectWalletButton/ConnectWalletButton";
import { UserContext } from "../../contexts/UserContext";
export default function CreateCampaign() {
  const { isAuthenticated,userAddress} = useContext(UserContext);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(contractAddress, Abi, provider);
  const [owner, setOwner] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const [image, setImage] = useState("");
  const createCampaign = async () => {
    try {
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner(accounts[0]);
      const contractWithSigner = contract.connect(signer);
      const tx = await contractWithSigner.createCampaign(
        userAddress,
        title,
        description,
        target,
        deadline,
        image,
        { gasLimit: 300000 }
      );
      await tx.wait();
      console.log("Campaign created successfully!");
    } catch (error) {
      console.log("Error creating campaign:", error);
    }
  };

  return (
    <div className="campaign__creation_main">
      <div className="campaign__creation_form">
        <div className="form_field">
          <label>Title: </label>
          <input
            type="text"
            id=""
            name=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form_field">
          <label>Description: </label>
          <textarea
            id=""
            name=""
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
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
        <div className="form_field">
          <label>Deadline: </label>
          <input
            type="number"
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
              className="submit__button"
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

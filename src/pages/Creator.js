import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState,  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getErc1155DContract, mint, mintSingle, setURI  } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const erc1155DContract = getErc1155DContract(bunzz);

    const [mintID, setMintID] = useState(0);
    const [mintData, setMintData] = useState("");
    const [baseURIString, setBaseURIString] = useState("");
  

    const [pendingMint, setPendingMint] = useState(false);
    const [pendingMintSingle, setPendingMintSingle] = useState(false);
    const [pendingSetBaseURI, setPendingSetBaseURI] = useState(false);
  
  
   
   
 
   


    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input ID</Form.Label>
                            <Form.Control type="email" placeholder="Enter ID" value={mintID} onChange={(val) => setMintID(val.target.value)} />
                            <Form.Label>Input Data</Form.Label>
                            <Form.Control type="email" placeholder="Enter Data" value={mintData} onChange={(val) => setMintData(val.target.value)} />
                        </Form.Group>
                            {!pendingMint ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingMint(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await mint(
                                        erc1155DContract,
                                        mintID,
                                        mintData,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingMint(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingMint(false);
                                    
                                }
                            }}>
                                Mint
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Mint
                            </Button>
                        }
                        {!pendingMintSingle ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingMintSingle(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await mintSingle(
                                        erc1155DContract,
                                        mintID,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingMintSingle(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingMintSingle(false);
                                    
                                }
                            }}>
                                MintSingle
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} MintSingle
                            </Button>
                        }




                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input BaseURI</Form.Label>
                            <Form.Control type="email" placeholder="Enter URI" value={baseURIString} onChange={(val) => setBaseURIString(val.target.value)} />
                        </Form.Group>

                        {!pendingSetBaseURI ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingSetBaseURI(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await setURI(
                                        erc1155DContract,
                                        baseURIString,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingSetBaseURI(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingSetBaseURI(false);
                                    
                                }
                            }}>
                                SetBaseURI
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} SetBaseURI
                            </Button>
                        }
                       
                        
                     
                    </Form>
                   

                                    

         

                  
                </Col>
            </Row>
        </Container>
    )
}

export default Creator;
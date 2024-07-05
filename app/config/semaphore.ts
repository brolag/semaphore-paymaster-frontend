export const SEMAPHORE_ABI = [
  {
    inputs: [
      {
        internalType: "contract ISemaphoreVerifier",
        name: "_verifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "LeafAlreadyExists", type: "error" },
  { inputs: [], name: "LeafCannotBeZero", type: "error" },
  { inputs: [], name: "LeafDoesNotExist", type: "error" },
  { inputs: [], name: "LeafGreaterThanSnarkScalarField", type: "error" },
  { inputs: [], name: "Semaphore__CallerIsNotTheGroupAdmin", type: "error" },
  {
    inputs: [],
    name: "Semaphore__CallerIsNotThePendingGroupAdmin",
    type: "error",
  },
  { inputs: [], name: "Semaphore__GroupDoesNotExist", type: "error" },
  { inputs: [], name: "Semaphore__GroupHasNoMembers", type: "error" },
  { inputs: [], name: "Semaphore__InvalidProof", type: "error" },
  {
    inputs: [],
    name: "Semaphore__MerkleTreeDepthIsNotSupported",
    type: "error",
  },
  { inputs: [], name: "Semaphore__MerkleTreeRootIsExpired", type: "error" },
  {
    inputs: [],
    name: "Semaphore__MerkleTreeRootIsNotPartOfTheGroup",
    type: "error",
  },
  {
    inputs: [],
    name: "Semaphore__YouAreUsingTheSameNullifierTwice",
    type: "error",
  },
  { inputs: [], name: "WrongSiblingNodes", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "GroupAdminPending",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "GroupAdminUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
    ],
    name: "GroupCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldMerkleTreeDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMerkleTreeDuration",
        type: "uint256",
      },
    ],
    name: "GroupMerkleTreeDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "merkleTreeRoot",
        type: "uint256",
      },
    ],
    name: "MemberAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "merkleTreeRoot",
        type: "uint256",
      },
    ],
    name: "MemberRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newIdentityCommitment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "merkleTreeRoot",
        type: "uint256",
      },
    ],
    name: "MemberUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "identityCommitments",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "merkleTreeRoot",
        type: "uint256",
      },
    ],
    name: "MembersAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "merkleTreeDepth",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "merkleTreeRoot",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nullifier",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "message",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "scope",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[8]",
        name: "points",
        type: "uint256[8]",
      },
    ],
    name: "ProofValidated",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "groupId", type: "uint256" }],
    name: "acceptGroupAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "groupId", type: "uint256" },
      { internalType: "uint256", name: "identityCommitment", type: "uint256" },
    ],
    name: "addMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "groupId", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "identityCommitments",
        type: "uint256[]",
      },
    ],
    name: "addMembers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "admin", type: "address" },
      { internalType: "uint256", name: "merkleTreeDuration", type: "uint256" },
    ],
    name: "createGroup",
    outputs: [{ internalType: "uint256", name: "groupId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createGroup",
    outputs: [{ internalType: "uint256", name: "groupId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "admin", type: "address" }],
    name: "createGroup",
    outputs: [{ internalType: "uint256", name: "groupId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "groupId", type: "uint256" }],
    name: "getGroupAdmin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "groupId", type: "uint256" }],
    name: "getMerkleTreeDepth",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "groupId", type: "uint256" }],
    name: "getMerkleTreeRoot",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "groupId", type: "uint256" }],
    name: "getMerkleTreeSize",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "groupCounter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "groups",
    outputs: [
      { internalType: "uint256", name: "merkleTreeDuration", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "groupId", type: "uint256" },
      { internalType: "uint256", name: "identityCommitment", type: "uint256" },
    ],
    name: "hasMember",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "groupId", type: "uint256" },
      { internalType: "uint256", name: "identityCommitment", type: "uint256" },
    ],
    name: "indexOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "groupId", type: "uint256" },
      { internalType: "uint256", name: "identityCommitment", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "merkleProofSiblings",
        type: "uint256[]",
      },
    ],
    name: "removeMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "groupId", type: "uint256" },
      { internalType: "address", name: "newAdmin", type: "address" },
    ],
    name: "updateGroupAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "groupId", type: "uint256" },
      {
        internalType: "uint256",
        name: "newMerkleTreeDuration",
        type: "uint256",
      },
    ],
    name: "updateGroupMerkleTreeDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "groupId", type: "uint256" },
      { internalType: "uint256", name: "identityCommitment", type: "uint256" },
      {
        internalType: "uint256",
        name: "newIdentityCommitment",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "merkleProofSiblings",
        type: "uint256[]",
      },
    ],
    name: "updateMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "groupId", type: "uint256" },
      {
        components: [
          { internalType: "uint256", name: "merkleTreeDepth", type: "uint256" },
          { internalType: "uint256", name: "merkleTreeRoot", type: "uint256" },
          { internalType: "uint256", name: "nullifier", type: "uint256" },
          { internalType: "uint256", name: "message", type: "uint256" },
          { internalType: "uint256", name: "scope", type: "uint256" },
          { internalType: "uint256[8]", name: "points", type: "uint256[8]" },
        ],
        internalType: "struct ISemaphore.SemaphoreProof",
        name: "proof",
        type: "tuple",
      },
    ],
    name: "validateProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract ISemaphoreVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "groupId", type: "uint256" },
      {
        components: [
          { internalType: "uint256", name: "merkleTreeDepth", type: "uint256" },
          { internalType: "uint256", name: "merkleTreeRoot", type: "uint256" },
          { internalType: "uint256", name: "nullifier", type: "uint256" },
          { internalType: "uint256", name: "message", type: "uint256" },
          { internalType: "uint256", name: "scope", type: "uint256" },
          { internalType: "uint256[8]", name: "points", type: "uint256[8]" },
        ],
        internalType: "struct ISemaphore.SemaphoreProof",
        name: "proof",
        type: "tuple",
      },
    ],
    name: "verifyProof",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];
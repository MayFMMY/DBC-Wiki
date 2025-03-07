# DBC-Blockchain Mainnet RPC

> For the method of sending RPC requests, please refer to the previous article.
>
> Not all data on the chain has an RPC interface. If the data you want to query (including historical data) is not exposed through RPC, you can obtain the corresponding data by querying the storage on the chain.

## 1. onlineProfile Module

onlineProfile Module records the information of the machine's online rewards

### 1.1 Query all machines controlled by a certain fund account

- Example

```json
{
     "jsonrpc":"2.0",
      "id":1,
      "method":"onlineProfile_getStakerInfo",
      "params": ["5FEio5dgXeXsASdo3Wh5DQ8zfbRfQJTXYmFkCbSCFk2qsTt6"] # (stash account)
}
```
- Explanation of results

```json
{
    "jsonrpc": "2.0",
    "result": {
        "bondedMachines": [
            {
                "calcPoint": 51775, # Machine power points
                "gpuNum": 4, # Machine GPU Num
                "machineId": [53,97,53,51,52,...], # Machine ID
                "machineStatus": "online" # The current state of the machine
            },
            {
                "calcPoint": 51775,
                "gpuNum": 4,
                "machineId": [97, 52, 100, 98, 98,...],
                "machineStatus": "online"
            },
            {
                "calcPoint": 94143,
                "gpuNum": 4,
                "machineId": [100, 56, 54, 97, 101, 53,...],
                "machineStatus": "online"
            }
        ],
        "stashStatistic": {
            "canClaimReward": "664079816723400000", # DBC rewards that can be received
            "onlineMachine": [ # Online machine
                [53,97,53,51,52,...],
                [97, 52, 100, 98, 98,...],
                [100, 56, 54, 97, 101, 53,...]
            ],
            "totalBurnFee": "0", # The number of rents destroyed after the start of the Galaxy Contest
            "totalCalcPoints": 197930, # Machine total calc Points
            "totalClaimedReward": "0", # Reward already received
            "totalEarnedReward": "2656319266893600000", # Rewards already rewarded
            "totalGpuNum": 12, # GPU bond to stash account
            "totalMachine": [ # Stash account Bound machine
                [53, 97, 53, 51, 10,...],
                [97, 52, 100, 98, 98, 100,...],
                [100, 56, 54, 97, 101,...]
            ],
            "totalRentFee": "0", # Machine obtained rent fee
            "totalRentedGpu": 0 # Number of rented GPUs
        }
    },
    "id": 1
}
```

### 1.2 Query a certain Era of the machine to obtain revenue

- Example

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getMachineEraReward",
  "params": [
    "ee0d003006f8ddbccb97dff96bcb4bee1b8c1aeaf7c64e0ca9d0f31752d17875", # Machine ID
    1  # Which Era
  ]
}
```

- Explanation of results

```json
{
  "jsonrpc": "2.0",
  "result": "123456", # Era 1 Total rewards obtained by the machine
  "id": 1
}
```

### 1.3. Query the machine's unlocking revenue in some Era

- Example

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getMachineEraReleasedReward",
  "params": [
    "ee0d003006f8ddbccb97dff96bcb4bee1b8c1aeaf7c64e0ca9d0f31752d17875", 1] # Machine ID；Which Era
}
```

- Explanation of results

```json
{
  "jsonrpc": "2.0",
  "result": "123456", # Era 1 Rewards for unlocking the machine
  "id": 1
}
```

### 1.4. Query a certain Era of the fund account to obtain income

- Example

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getStashEraReward",
  "params": ["5DhR2dxiPZquPhFjfPzFg5jZENdr375hbX643kr9FBXMVa2z", 1] # Stash account; the number of Era
}
```

- Explanation of results

```json
{
  "jsonrpc": "2.0",
  "result": "123456", # Era 1 Reward for this stash account
  "id": 1
}
```

### 1.5. Check the stash account for a certain Era unlocked reward

- Example

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getStashEraReward",
  "params": ["5DhR2dxiPZquPhFjfPzFg5jZENdr375hbX643kr9FBXMVa2z", 1] # Stash account; the number of Era
}
```

- Explanation of results

```json
{
  "jsonrpc": "2.0",
  "result": "123456", # Era 1 该资金账户解锁的奖励
  "id": 1
}
```

### 1.6. Query machine details

- Example

```json
{
     "jsonrpc":"2.0",
      "id":1,
      "method":"onlineProfile_getMachineInfo",
      "params": ["ee0d003006f8ddbccb97dff96bcb4bee1b8c1aeaf7c64e0ca9d0f31752d17875"] # Machine ID
}
```

- Explanation of results

```json
{
    "jsonrpc": "2.0",
    "result": {
        "bondingHeight": 531155, # Machine onchain time
        "controller": "5FTWuKEDhPsRWaeK5Jfn68a6rEFPsW8AAVF5YtfqNrznTWfv", # Machine control account
        "initStakePerGpu": "100000000000000000000", # The number of pledges per card when it is on the chain
        "lastMachineRenter": "5D45i3Ac4fXoimZQETJVMyYu79tAYzt4xQzEwzNLfirhsbg5", # Last machine renter
        "lastMachineRestake": 537808, # Machine pays all staking time
        "lastOnlineHeight": 580412, # The last time the machine was online
        "machineInfoDetail": { # Machine details info
            "committee_upload_info": {
                "calc_point": 60775,
                "cpu_core_num": 64,
                "cpu_rate": 2900,
                "cpu_type": [73,110,116,101,...],
                "cuda_core": 8704,
                "data_disk": 1800,
                "gpu_mem": 10,
                "gpu_num": 4,
                "gpu_type": [71,101,70,111,114,...],
                "is_support": true,
                "machine_id": [101,101,48,100,48,48,51,...],
                "mem_num": 471,
                "rand_str": [],
                "sys_disk": 350
            },
            "staker_customize_info": { # Other machine information
                "download_net": 20,
                "latitude": {
                    "North": 306667
                },
                "longitude": {
                    "East": 1040667
                },
                "server_room": "0x6465f54d26f4b406261e7e5201a4a17551ad4d27448609f2d7cdcb75b413524c",
                "telecom_operators": [
                    [67,104,105,110,...]
                ],
                "upload_net": 20
            }
        },
        "machineStash": "5HWSG8FXkCSe4NgwzbnA64nT5bmRFKRKgbSKj2X8Pe7KyYcQ", # Machine stash Account
        "machineStatus": "rented", # The current state of the machine
        "onlineHeight": 537808, # Machine online time
        "rewardCommittee": [ # List of committees that can receive machine online rewards
            "5EfFToHMVc3SEzJCiSisAMMu3zVMsufaxWwNECUM3k2qUEFQ",
            "5G3oJ8cGv4mhzRvtoBtGG9cX3MTNKxNTcMNAVykxA5ZFz8wi",
            "5GGcwSx1xb4tpCfopfk8kSmJNQ6qpH38yjFVLEYYqdnECwcX"
        ],
        "rewardDeadline": 733, # Committee award end time（era）
        "stakeAmount": "400000000000000000000", # Number of machine pledges
        "totalBurnFee": "0", # The number of rents destroyed due to the start of the Galaxy Contest
        "totalRentFee": "60329673396778369975", # Total rent fee
        "totalRentedDuration": 14, # Total rented duration
        "totalRentedTimes": 2 # Total rented time
    },
    "id": 1
}
```

### 1.7. Check the number of stash accounts

- Example

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getStakerNum",
  "params": []
}
```

- Explanation of results

```json
{
    "jsonrpc": "2.0",
    "result": 13, # Number of Stash（>=1台机器）
    "id": 1
}
```

### 1.8. View all machines in a list

- Example

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getMachineList",
  "params": []
}
```

- Explanation of results

```json
{
    "jsonrpc": "2.0",
    "result": {
        "bondingMachine": [],
        "bookedMachine": [
            [51,101,55,98,...],
            [53,97,99,54,99,57,...]
        ],
        "confirmedMachine": [],
        "fulfillingMachine": [],
        "offlineMachine": [],
        "onlineMachine": [],
        "refusedMachine": [],
        "refusedMutHardwareMachine": [],
        "rentedMachine": []
    },
    "id": 1
}
```

### 1.9 View onlineProfile module statistics

- Example

```
{
     "jsonrpc":"2.0",
      "id":1,
      "method":"onlineProfile_getOpInfo",
      "params": []
}
```

- Explanation of results

```json
{
  "jsonrpc": "2.0",
  "result": {
    "totalBurnFee": "0",
    "totalCalcPoints": 21389044,
    "totalGpuNum": 961,
    "totalRentFee": "15509145941941806044301",
    "totalRentedGpu": 937,
    "totalStake": "96215000000000000000000",
    "totalStaker": 13
  },
  "id": 1
}
```

### 1.10 Get the identity on the account chain

- Example

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getStakerIdentity",
  "params": ["5CqTCD23gTbfmP8s6g1ehbJ66i6wi4Er4AguAw7yggDAKmPu"]
}
```

- Explanation of results

```json
{
    "jsonrpc": "2.0",
    "result": [226,156,168,100,98,...],
    "id": 1
}
```

### 1.11 Get stash account statistics

- Example

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getStakerListInfo",
  "params": [0, 5]
}
```

- Explanation of results

```json
{
    "jsonrpc": "2.0",
    "result": [
        {
            "calcPoints": 10045876,
            "index": 0,
            "stakerAccount": "5CsRZJCDiFJbZas6m2NnuYpBqo9gYv2nixHbzGLUVGdgx94w",
            "stakerName": [229,133,131,...],
            "totalBurnFee": "0",
            "totalGpuNum": 400,
            "totalReleasedReward": "3058070375932000902000",
            "totalRentFee": "6923734258518997224842",
            "totalRentedGpu": 400,
            "totalReward": "10311175917767854800000"
        },
        {
            "calcPoints": 3153803,
            "index": 2,
            "stak {
            "calcPoints": 617340,
            "index": 4,
            "stakerAccount": "5Gg1z77NCrUNyV4c5rm9tb3x27rYjBVYh74UrVNJh1TJGsx4",
            "stakerName": [232,135,170,231,132,182,...],
            "totalBurnFee": "0",
            "totalGpuNum": 28,
            "totalReleasedReward": "279809088882620814000",
            "totalRentFee": "527263236025890876875",
            "totalRentedGpu": 28,
            "totalReward": "893193550619416200000"
        }erAccount": "5HJugpuDxQGKLJwmv6K5eWFepDPkhPbwyTDR5vKjCv1MwUcS",
            "stakerName": [229,133,131,232,190,...],
            "totalBurnFee": "0",
            "totalGpuNum": 132,
            "totalReleasedReward": "1392103944062414253000",
            "totalRentFee": "2669666089085907226556",
            "totalRentedGpu": 132,
            "totalReward": "4458201216316382700000"
        },


    ],
    "id": 1
}
```

### 1.12 Get statistics by location

- Example

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getPosGpuInfo",
  "params": []
}
```

- Explanation of results

```json
{
    "jsonrpc": "2.0",
    "result": [
        [
            {
                "East": 1182946
            },
            {
                "North": 340643
            },
            {
                "offlineGpu": 0,
                "onlineGpu": 400,
                "onlineGpuCalcPoints": 7496900,
                "rentedGpu": 400
            }
        ],
        [
            {
                "East": 1399262
            },
            {
                "North": 353817
            },
            {
                "offlineGpu": 0,
                "onlineGpu": 1,
                "onlineGpuCalcPoints": 21029,
                "rentedGpu": 1
            }
        ],
	...,
    ],
    "id": 1
}
```

## 2. Committee Module

### 2.1 committee_getCommitteeList

- Example

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "committee_getCommitteeList",
  "params": []
}
```

- Explanation of results

```json
{
    "jsonrpc": "2.0",
    "result": {
        "chillList": [
            "5GGcwSx1xb4tpCfopfk8kSmJNQ6qpH38yjFVLEYYqdnECwcX" # Committees that currently stop taking orders
        ],
        "fulfillingList": [],
        "normal": [ # Committees in a normal state
            "5D1vwMoK1DjBF7pfApKjT9Gi5C4DKHvZMztFRhTsMqo71B8r",
            "5DdA3eHdWKuHLjqEquKQzyvhumNBEN32RxRWkuuaFvda474S",
            "5EfFToHMVc3SEzJCiSisAMMu3zVMsufaxWwNECUM3k2qUEFQ",
            "5EhZqXq9objj6Qf7DzCxmjZfUHUbZh9JK5Xb3DgKmpvjyMMV",
            "5FyU86E1arMRNwdxtRJvBs6qX4Y1o1UB2TXHUV3ZJcmQVkQK",
            "5G3oJ8cGv4mhzRvtoBtGG9cX3MTNKxNTcMNAVykxA5ZFz8wi",
            "5GFCgrhHv2jwimWZAgnDzSdvJocDzEadCk78B5AZJc5tYSYp",
            "5Gy6ANnyoWwo6WxuN5Vxz5hogY2JXg51FZbR99gYtQ49qckW",
            "5HDjo1p7DNmfXsjvcAjFogQ8Ue8fNb26Z1RAD9XqmWrKETFk"
        ],
        "waitingBoxPubkey": [ # Committees that has not been set up boxPubkey
            "5Gv3FyFA7bFbUqqgXWXwkgCkazMaaBpfbVnwtVVRP5vgUYRs"
        ]
    },
    "id": 1
}
```

## 3. OnlineCommittee Module

### 3.1 Get the list of committees assigned by the machine

- Example

```json
{
     "jsonrpc":"2.0",
      "id":1,
      "method":"onlineCommittee_getMachineCommitteeList",
      "params": ["38f4a824e0dc1fc5a9a7dccff53417b300fc0edad208176d8770597d98f6eb5c"] # Machine ID
}
```

- Explanation of results

```json
{
    "jsonrpc": "2.0",
    "result": {
        "bookTime": 533682, # Order Dispatch time
        "bookedCommittee": [ # Order Dispatch committee
            "5D1vwMoK1DjBF7pfApKjT9Gi5C4DKHvZMztFRhTsMqo71B8r",
            "5DdA3eHdWKuHLjqEquKQzyvhumNBEN32RxRWkuuaFvda474S",
            "5Gy6ANnyoWwo6WxuN5Vxz5hogY2JXg51FZbR99gYtQ49qckW"
        ],
        "confirmStartTime": 538002, # Time to submit original machine information
        "confirmedCommittee": [ # The committee that has submitted the original value
            "5D1vwMoK1DjBF7pfApKjT9Gi5C4DKHvZMztFRhTsMqo71B8r",
            "5DdA3eHdWKuHLjqEquKQzyvhumNBEN32RxRWkuuaFvda474S",
            "5Gy6ANnyoWwo6WxuN5Vxz5hogY2JXg51FZbR99gYtQ49qckW"
        ],
        "hashedCommittee": [ # The committee that has submitted the machine information hash
            "5D1vwMoK1DjBF7pfApKjT9Gi5C4DKHvZMztFRhTsMqo71B8r",
            "5DdA3eHdWKuHLjqEquKQzyvhumNBEN32RxRWkuuaFvda474S",
            "5Gy6ANnyoWwo6WxuN5Vxz5hogY2JXg51FZbR99gYtQ49qckW"
        ],
        "onlinedCommittee": [ # The machine is successfully online and committee will be rewarded
            "5D1vwMoK1DjBF7pfApKjT9Gi5C4DKHvZMztFRhTsMqo71B8r",
            "5DdA3eHdWKuHLjqEquKQzyvhumNBEN32RxRWkuuaFvda474S",
            "5Gy6ANnyoWwo6WxuN5Vxz5hogY2JXg51FZbR99gYtQ49qckW"
        ],
        "status": "finished" # Order Dispatch status
    },
    "id": 1
}
```

### 3.2 Get the committee's review time for the machine

- Example

```json
{
     "jsonrpc":"2.0",
      "id":1,
      "method":"onlineCommittee_getCommitteeOps",
      "params": ["5D1vwMoK1DjBF7pfApKjT9Gi5C4DKHvZMztFRhTsMqo71B8r", "74339d3413c1386d23d92e55586ccf25090c7eb762928f9bc69799b677f65f51"] # Committee Account ID; Machine ID
}
```

- Explanation of results

```json
{
    "jsonrpc": "2.0",
    "result": {
        "bookedTime": 600340, # Order Dispatch time
        "confirmHash": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], # Submitted machine information Hash
        "confirmTime": 0,
        "hashTime": 0,
        "machineInfo": { # Submitted machine information
            "calc_point": 0,
            "cpu_core_num": 0,
            "cpu_rate": 0,
            "cpu_type": [],
            "cuda_core": 0,
            "data_disk": 0,
            "gpu_mem": 0,
            "gpu_num": 0,
            "gpu_type": [],
            "is_support": false,
            "machine_id": [],
            "mem_num": 0,
            "rand_str": [],
            "sys_disk": 0
        },
        "machineStatus": "booked",
        "stakedDbc": "1000000000000000000",
        "verifyTime": [
            600820,
            602260,
            603700
        ]
    },
    "id": 1
}
```

### 3.3 Get a list of all the machines dispatched by the committee

- Example

```
{
     "jsonrpc":"2.0",
      "id":1,
      "method":"onilneCommittee_getCommitteeMachineList",
      "params": ["5Gv3FyFA7bFbUqqgXWXwkgCkazMaaBpfbVnwtVVRP5vgUYRs"] # Committee Account ID
}
```

- Explanation of results

```
{
    "jsonrpc": "2.0",
    "result": {
        "bookedMachine": [], # Current dispatched order
        "confirmedMachine": [], # List of machines that submitted the original info
        "hashedMachine": [], # The list of machines that submitted the Hash
        "onlineMachine": [] # Machines that are now online
    },
    "id": 1
}
```

## 4. RentMachine Modul

### 4.1  View machine rental information

- Example

```json
{
     "jsonrpc":"2.0",
      "id":1,
      "method":"rentMachine_getRentOrder",
      "params": ["38f4a824e0dc1fc5a9a7dccff53417b300fc0edad208176d8770597d98f6eb5c"] # Machine ID
}
```

- Explanation of results

```json
{
    "jsonrpc": "2.0",
    "result": {
        "confirmRent": 539746, # Confirm rent succeed block height
        "rentEnd": 623264, # Rental end time
        "rentStart": 539744, # Rental start time
        "rentStatus": "renting", # Current order status
        "renter": "5D45i3Ac4fXoimZQETJVMyYu79tAYzt4xQzEwzNLfirhsbg5",
        "stakeAmount": "0" # Renter's staked amount
    },
    "id": 1
}
```

### 4.2 View the list of machines rented by an account

- Example

```json
{
     "jsonrpc":"2.0",
      "id":1,
      "method":"rentMachine_getRentList",
      "params": ["5E7123qZExgZaYKnmTcJacu68c2GbLeSHo9qNWmUWcaw4RSR"] # Renter Account
}
```

- Explanation of results

```json
{
    "jsonrpc": "2.0",
    "result": [
        [102, 97, 101, 100, 99, 53, 53, ...] # MachineId，u8 Array
    ],
    "id": 1
}
```


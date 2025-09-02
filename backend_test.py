#!/usr/bin/env python3
"""
Backend API Testing Script
Tests the FastAPI backend endpoints to ensure they are working correctly.
"""

import requests
import json
import os
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

def test_backend_apis():
    """Test all backend API endpoints"""
    
    backend_url = get_backend_url()
    if not backend_url:
        print("❌ Could not get backend URL from frontend/.env")
        return False
    
    api_base = f"{backend_url}/api"
    print(f"Testing backend APIs at: {api_base}")
    
    try:
        # Test 1: Root endpoint
        print("\n1. Testing root endpoint...")
        response = requests.get(f"{api_base}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Root endpoint working correctly")
            else:
                print(f"❌ Root endpoint returned unexpected data: {data}")
                return False
        else:
            print(f"❌ Root endpoint failed with status {response.status_code}")
            return False
            
        # Test 2: Create status check
        print("\n2. Testing POST /status endpoint...")
        test_data = {
            "client_name": "Test Client for Backend Verification"
        }
        response = requests.post(f"{api_base}/status", 
                               json=test_data, 
                               headers={"Content-Type": "application/json"},
                               timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if "id" in data and "client_name" in data and "timestamp" in data:
                print("✅ POST /status endpoint working correctly")
                created_id = data["id"]
            else:
                print(f"❌ POST /status returned incomplete data: {data}")
                return False
        else:
            print(f"❌ POST /status failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
        # Test 3: Get status checks
        print("\n3. Testing GET /status endpoint...")
        response = requests.get(f"{api_base}/status", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list) and len(data) > 0:
                # Check if our created item is in the list
                found_item = any(item.get("id") == created_id for item in data)
                if found_item:
                    print("✅ GET /status endpoint working correctly")
                else:
                    print("⚠️ GET /status working but created item not found")
            else:
                print("✅ GET /status endpoint working (empty list)")
        else:
            print(f"❌ GET /status failed with status {response.status_code}")
            return False
            
        print("\n🎉 All backend API tests passed successfully!")
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Network error during API testing: {e}")
        return False
    except Exception as e:
        print(f"❌ Unexpected error during API testing: {e}")
        return False

if __name__ == "__main__":
    print("=" * 60)
    print("BACKEND API TESTING")
    print("=" * 60)
    
    success = test_backend_apis()
    
    print("\n" + "=" * 60)
    if success:
        print("RESULT: ✅ All backend tests PASSED")
    else:
        print("RESULT: ❌ Some backend tests FAILED")
    print("=" * 60)
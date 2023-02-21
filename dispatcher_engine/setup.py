# from chatGPT

import subprocess
import sys
import venv

# Create a virtual environment
venv.create("venv", with_pip=True)

# Activate the virtual environment
if sys.platform == "win32":
    activate_script = "venv\\Scripts\\activate.bat"
else:
    activate_script = "venv/bin/activate"
subprocess.run(activate_script, shell=True)

# Install dependencies
subprocess.run("pip install -r requirements.txt", shell=True)

# Run the FastAPI app
subprocess.run("uvicorn main:app --reload", shell=True)

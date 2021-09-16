import tempfile
import subprocess

test = "test.js"
unit_tests = "unit_tests.js"


def solution_tests(test):
    with tempfile.TemporaryFile() as fp:
        print(fp.test)
        fp.write()
        fp.seek(0)
        fp.read()


def is_solution_correct(test, unit_tests):    
    solution_tests(test, unit_tests)
    unit_tests.write(test.encode())
    run_tests = subprocess.run(["node", "solution_tests.js"])
    return not run_tests.returncode


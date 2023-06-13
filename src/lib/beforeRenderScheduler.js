export const beforeRenderScheduler = {
    beforeRenderCallbackQueue: [],
    /**
     * Add a callback function to be executed before every render of the scene
     * @param {Function} callback Callback function to be executed
     */
    addCallback(callback) {
        this.beforeRenderCallbackQueue.push(callback);
    },
    /**
     * Remove a callback function from the list of callbacks to be run before every render
     * @param {Function} callback Callback function to remove
     */
    removeCallback(callback) {
        const index = beforeRenderFunctionQueue.findIndex(callback);
        // Check index exists before deleting
        if (index > -1) {
            beforeRenderFunctionQueue.splice(index, 1);
        }
    },
    /**
     * Executes all Callback functions in the queue
     */
    executeAllCallbacks() {
        this.beforeRenderCallbackQueue.forEach(callback => callback());
    }
}
